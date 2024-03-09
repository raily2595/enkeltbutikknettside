import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { createBestilling, createKunde, createProdukt, createTransaksjon } from 'graphql/mutations';
import { getKunde } from "../../graphql/queries";
import moment from "moment";

function Kasse() {
    const client = generateClient();
    const navigate = useNavigate();
    const [harDataILocalStorage, setHarDataILocalStorage] = useState(false);
    const [bestillingsforesporsel, setBestillingsforesporsel] = useState({
        navn: '',
        epost: '',
        adresse: '',
        postnr: '',
        telefon: '',
        poststed: '',
        produkter: [],
        leveringsmetode: '',
        totalt: '',
        kommentar: ''
    });

    // Sjekk localstorage ved oppstart av komponenten
    useEffect(() => {
        const dataILocalStorage = localStorage.getItem('productConfigurations');
        if (dataILocalStorage) {
            setHarDataILocalStorage(true);
        }
    }, []);

    useEffect(() => {
        // Hent produktinformasjon fra localStorage og legg den til i bestillingsforespørselen
        const productConfigurations = JSON.parse(localStorage.getItem('productConfigurations')) || [];
        const totalPrice = productConfigurations.reduce((total, produkt) => {
            return total + produkt.pris; // Assuming pris is the property that stores the price
        }, 0);

        setBestillingsforesporsel((prevState) => ({
            ...prevState, produkter: productConfigurations, totalt: totalPrice,
        }));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBestillingsforesporsel((prevState) => ({
            ...prevState, [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let kundeid = ""
        try {
            try {
                // Get a specific item
                const oneKunde = await client.graphql({
                    query: getKunde, variables: { "telefon": bestillingsforesporsel.telefon }
                });
                kundeid = oneKunde?.data?.getKunde?.id
            } catch {
                try {
                    const newKunde = await client.graphql({
                        query: createKunde, variables: {
                            input: {
                                "navn": bestillingsforesporsel.navn,
                                "epost": bestillingsforesporsel.epost,
                                "adresse": bestillingsforesporsel.adresse,
                                "postnr": bestillingsforesporsel.postnr,
                                "poststed": bestillingsforesporsel.poststed,
                                "telefon": bestillingsforesporsel.telefon,
                            }
                        }
                    });
                    kundeid = newKunde?.data?.createKunde?.id
                } catch (error) {
                    console.error("Error in createKunde:", error);
                }
            }

            const newBestilling = await client.graphql({
                query: createBestilling, variables: {
                    input: {
                        "ordreDato": moment().format('YYYY-MM-DD'),
                        "bestillingsstatus": "bestilt",
                        "kundeID": kundeid,
                        "adresse": bestillingsforesporsel.adresse,
                        "postnr": bestillingsforesporsel.postnr,
                        "poststed": bestillingsforesporsel.poststed,
                        "leveringsmetode": bestillingsforesporsel.leveringsmetode,
                        "kommentar": bestillingsforesporsel.kommentar,
                    }
                }
            });

            const newTransaksjon = await client.graphql({
                query: createTransaksjon, variables: {
                    input: {
                        "betalingsmetode": "faktura",
                        "betalingsstatus": "ikke betalt",
                        "total": bestillingsforesporsel.totalt,
                        "bestillingID": newBestilling?.data?.createBestilling?.id,
                    }
                }
            });

            bestillingsforesporsel.produkter.map(async produkt => {
                try {
                    const newProdukt = await client.graphql({
                        query: createProdukt, variables: {
                            input: {
                                "produktnavn": produkt.produktnavn,
                                "farge": produkt.farge,
                                "farge2": produkt.farge2,
                                "lengde": produkt.lengde,
                                "bredde": produkt.bredde,
                                "detaljefarger": produkt.detaljefarger,
                                "klips": produkt.klips,
                                "vinyltekst": produkt.vinyltekst,
                                "fontfarge": produkt.fontfarge,
                                "font": produkt.font,
                                "pris": produkt.pris,
                                "kommentar": produkt.kommentar,
                                "valgtLeke": produkt.valgtLeke,
                                "bestillingID": newBestilling?.data?.createBestilling?.id,
                            }
                        }
                    });
                    console.log("New Produkt:", newProdukt);
                } catch (error) {
                    console.error("Error creating Produkt:", error);
                }
            });
        } catch (error) {
            console.error("Error in handleSubmit:", error);
        }
    };

    return (<div>
        <h1>Bestillingsskjema</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="navn">Navn:</label>
                <input
                    type="text"
                    id="navn"
                    name="navn"
                    value={bestillingsforesporsel.navn}
                    onChange={handleInputChange}
                    autoComplete="name"
                    required
                />
            </div>
            <div>
                <label htmlFor="epost">E-post:</label>
                <input
                    type="email"
                    id="epost"
                    name="epost"
                    value={bestillingsforesporsel.epost}
                    onChange={handleInputChange}
                    autoComplete="email"
                    required
                />
            </div>
            <div>
                <label htmlFor="gateadresse">Gateadresse:</label>
                <input
                    type="text"
                    id="gateadresse"
                    name="adresse"
                    value={bestillingsforesporsel.adresse}
                    onChange={handleInputChange}
                    autoComplete="address-line1"
                    required
                />
            </div>
            <div>
                <label htmlFor="postnr">Postnr:</label>
                <input
                    type="text"
                    id="postnr"
                    name="postnr"
                    value={bestillingsforesporsel.postnr}
                    onChange={handleInputChange}
                    autoComplete="postal-code"
                    required
                />
            </div>
            <div>
                <label htmlFor="poststed">Poststed:</label>
                <input
                    type="text"
                    id="poststed"
                    name="poststed"
                    value={bestillingsforesporsel.poststed}
                    onChange={handleInputChange}
                    autoComplete="address-level2"
                    required
                />
            </div>
            <div>
                <label htmlFor="telefon">Telefon:</label>
                <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={bestillingsforesporsel.telefon}
                    onChange={handleInputChange}
                    autoComplete="tel"
                    required
                />
            </div>
            <div>
                <p>Leveringsmetode</p>
                <input
                    type="radio"
                    id="levering"
                    name="leveringsmetode"
                    value="Sendes med posten"
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="levering">Sendes med posten</label>
                <input
                    type="radio"
                    id="avtaler"
                    name="leveringsmetode"
                    value="Avtaler levering"
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="avtaler">Avtaler levering:</label>
                <label htmlFor="kommentar">Kommentar: </label>
                <textarea
                    id="kommentar"
                    name="kommentar"
                    value={bestillingsforesporsel.kommentar}
                    onChange={handleInputChange}
                />
            </div>
            {harDataILocalStorage && (<button type="submit">Send bestilling</button>)}
        </form>
    </div>);
}

export default Kasse;
