import React from 'react';
import strings from '../strings.json';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <NavLink
                    className="logo"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/"><img src={`${process.env.PUBLIC_URL}logo.png`} alt="Logo" /></NavLink>
                <div className="header-text">
                    <h1>{strings.navn}</h1>
                    <p>{strings.beskrivelse}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
