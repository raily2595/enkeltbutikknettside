import strings from '../../strings.json';
import {NavLink} from "react-router-dom";
import React from "react";
const Meny = () => {
    return (
        <div>
            <div className="meny-content">
                <NavLink
                    className="halsband"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/halsband">{strings.menytekst1}</NavLink>
                <NavLink
                    className="band"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/band">{strings.menytekst2}</NavLink>
                <NavLink
                    className="sele"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/sele">{strings.menytekst3}</NavLink>
                <NavLink
                    className="leke"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/leke">{strings.menytekst4}</NavLink>
                <NavLink
                    className="annet"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/annet">{strings.menytekst5}</NavLink>
            </div>
        </div>
    );
};

export default Meny;