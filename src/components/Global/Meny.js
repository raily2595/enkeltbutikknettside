import strings from 'strings.json';
import { NavLink } from "react-router-dom";
import React from "react";
const Meny = () => {
    return (
        <div>
            <div className="menu-content">
                <NavLink
                    className="menu-button"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/halsband">{strings.menytekst1}</NavLink>
                <NavLink
                    className="menu-button"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/band">{strings.menytekst2}</NavLink>
                <NavLink
                    className="menu-button"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/leke">{strings.menytekst3}</NavLink>
                <NavLink
                    className="menu-button"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/handlekurv">{strings.menytekst6}</NavLink>
            </div>
        </div>
    );
};

export default Meny;