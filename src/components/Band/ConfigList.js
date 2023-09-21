import React from "react";
import {NavLink} from "react-router-dom";

const ConfigList = ({ configurations, onEditConfig, onDeleteConfig }) => {
    return (
        <div>
            <h3>Configurations:</h3>
            <NavLink
                className="card-button"
                activeclassname="nav-link-active"
                exact="true"
                to="/kasse">Kasse</NavLink>
            <ul>
                {configurations.map((config, index) => (
                    <li key={index}>
                        <div>
                            <strong>Configuration {index + 1}</strong>
                        </div>
                        <div>Selected Color: {config.Farge}</div>
                        <div>Text: {config.Vinyltekst}</div>
                        <div>Text Color: {config.Fontfarge}</div>
                        <div>Font: {config.Font}</div>
                        <div>
                            <button onClick={() => onEditConfig(index)}>Edit</button>
                            {onDeleteConfig && <button onClick={() => onDeleteConfig(index)}>Delete</button>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConfigList;
