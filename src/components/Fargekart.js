import React from "react";
import {NavLink} from "react-router-dom";

const Fargekart = () => {
    return (
        <main>
            <div className="fargekart">
                <img src={`${process.env.PUBLIC_URL}fargekart/Blue521.jpg`} alt="Lysblå" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Brown522.jpg`} alt="Rødbrun" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Coral521.jpg`} alt="Korall" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Gold-leaf522.jpg`} alt="Beige" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Green52K.jpg`} alt="Karibigrønn" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Green525.jpg`} alt="Eplegrønn" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Lagune52F.jpg`} alt="Laguneblå" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Orange529.jpg`} alt="Ferskenorange" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Pink521.jpg`} alt="Neonrosa" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Purple524.jpg`} alt="Ametyst" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Red522.jpg`} alt="Rød" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Wine521.jpg`} alt="Vinrød" />
            </div>
            <div>
                <NavLink
                    className="nav-link"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/">Startside</NavLink>
            </div>
        </main>
    );
};


export default Fargekart;