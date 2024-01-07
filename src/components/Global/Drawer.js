import React from 'react';
import {NavLink} from "react-router-dom";

function Drawer({ isOpen }) {
    const hasLocalStorageData = localStorage.getItem('productConfigurations'); // Sjekker om det er data i localStorage

    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            {isOpen && (
                <div className="drawer-content">
                    {hasLocalStorageData && (
                        <NavLink
                            className="card-button"
                            exact="true"
                            to="/handlekurv"
                        >
                            Til Handlekurv
                        </NavLink>
                    )}
                </div>
            )}
        </div>
    );
}

export default Drawer;
