import React from "react";
import { NavLink } from "react-router-dom";
const Annet = () => {
    return (
        <div>
            <div className="main-content">
                <div className="card">
                    <div className="card-content">
                        <div>
                            <h2>Paracord Halsbånd</h2>
                        </div>
                        <div>
                            <p>400kr</p>
                        </div>
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/annet/paracord">Paracord Halsbånd</NavLink>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div>
                            <h2>Biothane halsbånd med trykk</h2>
                        </div>
                        <div>
                            <p>400kr</p>
                        </div>
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/annet/trykk-halsband">Halsbånd med trykk</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Annet;