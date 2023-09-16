import React, { useState } from 'react';

function Kasse() {
    const [formData, setFormData] = useState({
        navn: '',
        epost: '',
        gateadresse: '',
        postnr: '',
        poststed: '',
        telefon: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enkel validering: Sjekk om alle feltene er fylt ut
        if (formData.navn && formData.epost && formData.gateadresse && formData.telefon && formData.poststed && formData.postnr) {
            // Her kan du legge til kode for å sende bestillingen, for eksempel til en API.
            console.log(formData);
            setFormSubmitted(true);
        } else {
            alert('Vennligst fyll ut alle feltene.');
        }
    };

    return (
        <div>
            <h1>Bestillingsskjema</h1>
            {formSubmitted ? (
                <div>
                    <p>Takk for din bestilling!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="navn">Navn:</label>
                        <input
                            type="text"
                            id="navn"
                            name="navn"
                            value={formData.navn}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="epost">E-post:</label>
                        <input
                            type="email"
                            id="epost"
                            name="epost"
                            value={formData.epost}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="gateadresse">Gateadresse:</label>
                        <input
                            type="text"
                            id="gateadresse"
                            name="gateadresse"
                            value={formData.gateadresse}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="postnr">Postnr:</label>
                        <input
                            type="text"
                            id="postnr"
                            name="postnr"
                            value={formData.postnr}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="poststed">Poststed:</label>
                        <input
                            type="text"
                            id="poststed"
                            name="poststed"
                            value={formData.poststed}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="telefon">Telefon:</label>
                        <input
                            type="tel"
                            id="telefon"
                            name="telefon"
                            value={formData.telefon}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Send bestilling</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Kasse;
