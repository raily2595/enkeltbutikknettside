import React from "react";
import {NavLink} from "react-router-dom";

const Fargekart = () => {
    return (
        <main>
            <div className="fargekart">
                <img src={`${process.env.PUBLIC_URL}fargekart/Blue52F.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Blue521.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Brown522.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Coral521.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Gold-leaf522.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Green52K.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Green525.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Lagune52F.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Orange529.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Pink521.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Purple524.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Red522.jpg`} alt="Nila" />

                <img src={`${process.env.PUBLIC_URL}fargekart/Wine521.jpg`} alt="Nila" />
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