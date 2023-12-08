import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Kasse() {
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
        betalingsmetode: '',
        totalt: 600,
    });
    const [feilmelding, setFeilmelding] = useState('');

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
        setBestillingsforesporsel((prevState) => ({
            ...prevState,
            produkter: productConfigurations,
        }));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBestillingsforesporsel((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('https://localhost:7123/api/Nettside', bestillingsforesporsel)
            .then((response) => {
                // Håndter suksessrespons her
                console.log('Bestilling opprettet:', response.data);
                // Tilbakestill skjemaet etter en vellykket bestilling om nødvendig
                setBestillingsforesporsel({
                    navn: '',
                    epost: '',
                    adresse: '',
                    postnr: '',
                    telefon: '',
                    poststed: '',
                    produkter: [],
                    betalingsmetode: '',
                    totalt: 600,
                    // Tilbakestill andre felt om nødvendig
                });
                // Fjern produktinformasjonen fra localStorage etter bestilling hvis nødvendig
                localStorage.removeItem('productConfigurations');

                // Naviger til en ny side
                navigate('/bekreftelse'); // Bytt ut '/ny-side' med den faktiske URLen til den nye siden

            })
            .catch((error) => {
                // Håndter feilrespons her
                if (error.response) {
                    // Feilmelding fra serveren
                    console.error('Feilmelding fra server:', error.response.data);
                } else {
                    // Annet feil, for eksempel nettverksfeil
                    console.error('Annet feil:', error.message);
                }
                console.error('Feil ved opprettelse av bestilling:', error);
                setFeilmelding('Feil ved opprettelse av bestilling');
            });
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
                    <p>Betalingsmetode</p>
                    <input
                        type="radio"
                        id="epostfaktura"
                        name="Betalingsmetode"
                        value="Faktura på epost"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="epostfaktura">Faktura på epost:</label>
                    <input
                        type="radio"
                        id="vippsfaktura"
                        name="Betalingsmetode"
                        value="Faktura på vipps"
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="vippsfaktura">eFaktura:</label>
                </div>
                {harDataILocalStorage && (
                <button type="submit">Send bestilling</button>)}
            </form>
            {feilmelding && <p>{feilmelding}</p>}
        </div>
    );
}

export default Kasse;
