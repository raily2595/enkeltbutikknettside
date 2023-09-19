import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Kasse() {
    const [bestillingsforesporsel, setBestillingsforesporsel] = useState({
        Navn: '',
        Epost: '',
        Adresse: '',
        Postnr: '',
        Telefon: '',
        Poststed: '',
        Produkter: [],
        Betalingsmetode: '',
        Totalt: '',
    });
    const [feilmelding, setFeilmelding] = useState('');

    useEffect(() => {
        // Hent produktinformasjon fra localStorage og legg den til i bestillingsforespørselen
        const productConfigurations = JSON.parse(localStorage.getItem('productConfigurations')) || [];
        setBestillingsforesporsel((prevState) => ({
            ...prevState,
            Produkter: productConfigurations,
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
            .post('/api/Nettside', bestillingsforesporsel)
            .then((response) => {
                // Håndter suksessrespons her
                console.log('Bestilling opprettet:', response.data);
                // Tilbakestill skjemaet etter en vellykket bestilling om nødvendig
                setBestillingsforesporsel({
                    Navn: '',
                    Epost: '',
                    Adresse: '',
                    Postnr: '',
                    Telefon: '',
                    Poststed: '',
                    Produkter: [],
                    Betalingsmetode: '',
                    Totalt: '',
                    // Tilbakestill andre felt om nødvendig
                });
                // Fjern produktinformasjonen fra localStorage etter bestilling hvis nødvendig
                localStorage.removeItem('productConfigurations');
            })
            .catch((error) => {
                // Håndter feilrespons her
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
                        name="Navn"
                        value={bestillingsforesporsel.Navn}
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
                        name="Epost"
                        value={bestillingsforesporsel.Epost}
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
                        name="Adresse"
                        value={bestillingsforesporsel.Adresse}
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
                        name="Postnr"
                        value={bestillingsforesporsel.Postnr}
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
                        name="Poststed"
                        value={bestillingsforesporsel.Poststed}
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
                        name="Telefon"
                        value={bestillingsforesporsel.Telefon}
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
                    <label htmlFor="vippsfaktura">Faktura på vipps:</label>
                </div>
                <button type="submit">Send bestilling</button>
            </form>
            {feilmelding && <p>{feilmelding}</p>}
        </div>
    );
}

export default Kasse;
