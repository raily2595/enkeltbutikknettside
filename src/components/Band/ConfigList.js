import React from "react";
import {NavLink} from "react-router-dom";

const ConfigList = ({ configurations, onEditConfig, onDeleteConfig }) => {
    // Calculate the total sum of prices
    const totalSum = configurations.reduce((sum, config) => sum + config.pris, 0);

    return (
        <div>
            <h3>Configurations:</h3>
            <NavLink
                className="card-button"
                activeClassName="nav-link-active"
                exact="true"
                to="/kasse"
            >
                Kasse
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
                            <button onClick={() => onEditConfig(index)}>Edit</button>
                            {onDeleteConfig && <button onClick={() => onDeleteConfig(index)}>Delete</button>}
                        </div>
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
