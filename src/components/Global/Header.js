import React from 'react';
import strings from '../../strings.json';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <NavLink
                    className="logo"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/"><img src={`${process.env.PUBLIC_URL}logo.jpg`} alt="Logo" /></NavLink>
                <div className="header-text">
                    <h1>{strings.navn}</h1>
                    <p>{strings.beskrivelse}</p>
                    <NavLink
                        activeclassname="nav-link-active"
                        exact="true"
                        target={"_blank"}
                        to="https://www.instagram.com/nilas_lille_verksted/">
                        <div className="media">
                            <img src={`${process.env.PUBLIC_URL}instalogo.png`} alt="instalogo" />
                            <p>@nilas_lille_verksted</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
