import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { createBestilling, upsertKunde } from 'graphql/mutations';

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
            ...prevState,
            produkter: productConfigurations,
            totalt: totalPrice,
        }));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBestillingsforesporsel((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

            try {
                const Kundedata = {
                    navn: bestillingsforesporsel.navn,
                    epost: bestillingsforesporsel.epost,
                    adresse: bestillingsforesporsel.adresse,
                    postnr: bestillingsforesporsel.postnr,
                    poststed: bestillingsforesporsel.poststed,
                    telefon: bestillingsforesporsel.telefon
                }
                const Kunde = await client.graphql({query: upsertKunde, variables: { input: Kundedata }});

                const bestillingData = {
                    id: Date.now() * Math.random(),
                    ordreDato: Date.now(),
                    bestillingsstatus: "bestilt",
                    kundeID: Kunde.id,
                    Produkter: bestillingsforesporsel.produkter,
                    Transaksjon: {
                        id: Date.now() * Math.random(),
                        betalingsmetode: "faktura",
                        betalingsstatus: "ikke betalt",
                        total: bestillingsforesporsel.totalt,
                    }
                };

                console.log(Kunde.id)
                const response = await client.graphql({query: createBestilling, variables: { input: bestillingData }});
                setBestillingsforesporsel({
                    navn: '',
                    epost: '',
                    adresse: '',
                    postnr: '',
                    telefon: '',
                    poststed: '',
                    produkter: [],
                    leveringsmetode: '',
                    totalt: '',
                    // Tilbakestill andre felt om nødvendig
                });
                // Fjern produktinformasjonen fra localStorage etter bestilling hvis nødvendig
                localStorage.removeItem('productConfigurations');

                // Naviger til en ny side
                navigate('/bekreftelse'); // Bytt ut '/ny-side' med den faktiske URLen til den nye siden
            } catch (err) {
                console.error('Error upserting or creating bestilling:', err);
            }
    };

    return (
        <div>
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
                        name="Leveringsmetode"
                        value="Sendes med posten"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="levering">Sendes med posten</label>
                    <input
                        type="radio"
                        id="avtaler"
                        name="Leveringsmetode"
                        value="Avtaler levering"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="avtaler">Avtaler levering:</label>
                </div>
                {harDataILocalStorage && (
                <button type="submit">Send bestilling</button>)}
            </form>
        </div>
    );
}

export default Kasse;
