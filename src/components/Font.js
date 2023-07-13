import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

const FontPage = () => {
    const [text, setText] = useState('Navn');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <h1>Din tekst</h1>
            <input type="text" value={text} onChange={handleInputChange} />
            <table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Font</th>
                        <th>Navn</th>
                        <th>Font</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Arial</th>
                        <th><div style={{ fontFamily: 'Arial', fontSize: '50px' }}>{text}</div></th>
                        <th>Tøff</th>
                        <th><div style={{ fontFamily: 'Tøff', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Courier New</th>
                        <th><div style={{ fontFamily: 'Courier New', fontSize: '50px' }}>{text}</div></th>
                        <th>Calibri</th>
                        <th><div style={{ fontFamily: 'Calibri', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Comic Sans</th>
                        <th><div style={{ fontFamily: 'Comic Sans', fontSize: '50px' }}>{text}</div></th>
                        <th>Stjernekrig</th>
                        <th><div style={{ fontFamily: 'Stjernekrig', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Times New Roman</th>
                        <th><div style={{ fontFamily: 'Times New Roman', fontSize: '50px' }}>{text}</div></th>
                        <th>Magisk</th>
                        <th><div style={{ fontFamily: 'Magisk', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Håndskrevet</th>
                        <th><div style={{ fontFamily: 'Handskrevet', fontSize: '50px' }}>{text}</div></th>
                        <th>Skog</th>
                        <th><div style={{ fontFamily: 'Skog', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Tegnefilm</th>
                        <th><div style={{ fontFamily: 'Tegnefilm', fontSize: '50px' }}>{text}</div></th>
                        <th>Barnebok</th>
                        <th><div style={{ fontFamily: 'Barnebok', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                </tbody>
            </table>
            <div>
                <NavLink
                    className="nav-link"
                    activeclassname="nav-link-active"
                    exact="true"
                    to="/">Startside</NavLink>
            </div>
        </div>
    );
};

export default FontPage;
