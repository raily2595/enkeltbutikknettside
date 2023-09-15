import strings from '../strings.json';
import {NavLink} from "react-router-dom";
import React from "react";
const Sele = () => {
    return (
        <sele>
            <div className="sele-content">
                <div className="card">
                    <div className="card-lone-content">
                        <div>
                            <h2>{strings.info}</h2>
                            <p>{strings.infotext1}</p>
                            <p>{strings.infotext2}</p>
                            <p>{strings.infotext3}</p>
                            <p>{strings.infotext4}</p>
                        </div>
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/fargekart">Fargekart</NavLink>
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/font">Font</NavLink>
                    </div>
                </div>
            </div>
        </sele>
    );
};

export default Sele;
