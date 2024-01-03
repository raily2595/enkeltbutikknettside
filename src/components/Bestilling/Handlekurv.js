import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Handlekurv = () => {
    const [handlekurvItems, setHandlekurvItems] = useState([]);

    const totalSum = handlekurvItems.reduce((sum, config) => sum + config.pris, 0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('productConfigurations')) || [];
        setHandlekurvItems(storedCart);
    }, []);

    const removeFromCart = (index) => {
        // Fjern elementet fra handlekurven basert på index
        console.log(index);
        console.log(handlekurvItems.length);
        const updatedHandlekurv = [...handlekurvItems.slice(0, index), ...handlekurvItems.slice(index + 1)];
        console.log(updatedHandlekurv.length);
        setHandlekurvItems(updatedHandlekurv);

        // Oppdater localStorage med den oppdaterte handlekurven
        localStorage.setItem('productConfigurations', JSON.stringify(updatedHandlekurv));
    };

    const clearCart = () => {
        // Tøm hele handlekurven
        setHandlekurvItems([]);

        // Oppdater localStorage med en tom handlekurv
        localStorage.removeItem('productConfigurations');
    };

    const fargetekst = (item) => {
        let tekst = item.farge
        tekst += item.onskerFarge2 ? " og " + item.farge2 : ""
        tekst += " med " + item.detaljefarger + "farget metall"
        tekst += item.harKlipsbool ? " og " + item.klips + " klipps" : ""
        return tekst
    };

    const storrelsestekst = (item) => {
        let tekst = item.lengde
        tekst += item.harLengdecmbool ? " cm omkrets" : " m lang"
        tekst += item.harBreddebool ? " og " + item.bredde + "mm bred" : ""
        return tekst
    };

    return (
        <div className="main-content">
            {handlekurvItems.length === 0 ? (
                <div>
                    <h2>Handlekurv</h2>
                    <p>Handlekurven er tom</p>
                </div>
            ) : (
                <div className="handlekurv">
                    <h2>Handlekurv</h2>

                    <ul className="no-bullets">
                        {handlekurvItems.map((item, index) => (
                            <li key={index}>
                                <div className="konfigurator-card">
                                    <div className="konfigurator-tittel">
                                        <label>{item.produktnavn}</label>
                                    </div>
                                    <div>
                                        <label>{fargetekst(item)}</label>
                                    </div>
                                    {item.onskerTekst && (
                                        <div>
                                            <label>{item.fontfarge} {item.font} tekst "{item.vinyltekst}"</label>
                                        </div>
                                    )}
                                    {item.harLekebool && (
                                        <div>Valgt Leke: {item.valgtLeke}</div>
                                    )}
                                    <div>
                                        <label>{storrelsestekst(item)}</label>
                                    </div>
                                    <div>Pris: {item.pris} kr</div>
                                    <button className="secondary-small-button" onClick={() => removeFromCart(index)}>Fjern</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <strong>Total Sum:</strong> {totalSum}
                    </div>
                    <button className="secondary-button" onClick={clearCart}>Tøm handlekurv</button>
                    <NavLink
                        className="primary-button"
                        exact="true"
                        to="/kasse"
                    >
                        Til kassen
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Handlekurv;