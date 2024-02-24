import React from "react";
import { NavLink } from "react-router-dom";

const ConfigList = ({ configurations, onDeleteConfig }) => {
    // Calculate the total sum of prices
    const totalSum = configurations.reduce((sum, config) => sum + config.pris, 0);

    return (
        <div>
            <h3>Handlekurv</h3>
            <NavLink
                className="card-button"
                exact="true"
                to="/kasse"
            >
                Til kassen
            </NavLink>
            <ul>
                {configurations.map((config, index) => (
                    <li key={index}>
                        <div>
                            <strong>{config.produktnavn}</strong>
                        </div>
                        <div>
                            Lengde: {config.lengde} Bredde: {config.bredde}
                        </div>
                        <div>Valgt farge: {config.farge}</div>
                        {config.onskerFarge2 && (
                            <div>Valgt farge2: {config.farge2}</div>
                        )}
                        {config.onskerTekst && (
                            <>
                                <div>Text: {config.vinyltekst} Text Color: {config.fontfarge} Font: {config.font}</div>
                            </>
                        )}
                        <div>Pris: {config.pris}</div>
                        <div>
                            {onDeleteConfig && <button onClick={() => onDeleteConfig(index)}>Delete</button>}
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
            {/* Display the total sum of prices at the bottom */}
            <div>
                <strong>Total Sum:</strong> {totalSum}
            </div>
        </div>
    );
};

export default ConfigList;
