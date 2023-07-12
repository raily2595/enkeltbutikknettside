import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

const FontPage = () => {
    const [text, setText] = useState('');

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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Arial</th>
                        <th><div style={{ fontFamily: 'Arial', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Courier New</th>
                        <th><div style={{ fontFamily: 'Courier New', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Comic Sans</th>
                        <th><div style={{ fontFamily: 'Comic Sans', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Times New Roman</th>
                        <th><div style={{ fontFamily: 'Times New Roman', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>Håndskrevet</th>
                        <th><div style={{ fontFamily: 'Handskrevet', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>bolde</th>
                        <th><div style={{ fontFamily: 'bolde', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>dad</th>
                        <th><div style={{ fontFamily: 'dad', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>FreshMix</th>
                        <th><div style={{ fontFamily: 'FreshMix', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>stjernekrig</th>
                        <th><div style={{ fontFamily: 'stjernekrig', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>wild</th>
                        <th><div style={{ fontFamily: 'wild', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>winnie</th>
                        <th><div style={{ fontFamily: 'winnie', fontSize: '50px' }}>{text}</div></th>
                    </tr>
                    <tr>
                        <th>wizard</th>
                        <th><div style={{ fontFamily: 'wizard', fontSize: '50px' }}>{text}</div></th>
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
