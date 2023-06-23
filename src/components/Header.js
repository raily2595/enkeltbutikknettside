import React from 'react';
import strings from '../strings.json';

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                </div>
                <div className="header-text">
                    <h1>Nila's butikk</h1>
                    <p>{strings.beskrivelse}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
