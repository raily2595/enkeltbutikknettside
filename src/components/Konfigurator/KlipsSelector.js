import React, { useState } from 'react';

// Maps option names to image URLs
const options = {
    Svart: `${process.env.PUBLIC_URL}/klips/svartklips.jpg`,
    Militærgrønn: `${process.env.PUBLIC_URL}/klips/armygrønnklips.jpg`,
    Fiolett: `${process.env.PUBLIC_URL}/klips/fiolettklips.jpg`,
    Aquablå: `${process.env.PUBLIC_URL}/klips/aquablåklips.jpg`,
    Hvit: `${process.env.PUBLIC_URL}/klips/hvitklips.jpg`,
    Beige: `${process.env.PUBLIC_URL}/klips/beigeklips.jpg`,
};

const Buttons = ({ onColorChange }) => {
    const defaultOption = Object.keys(options)[0];
    const [selected, setSelected] = useState(defaultOption); // Initialize with a default selection
    return (
        <div>
            <h3>Klipsfarge</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {Object.entries(options).map(([option, imageUrl]) => (
                    <button
                        key={option}
                        style={{
                            backgroundColor: "#fff",
                            padding: 6,
                            fontSize: 16,
                            fontWeight: 'bold',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            border: option === selected ? "4px solid #000" : "4px solid transparent", // Border for the selected color
                        }}
                        onClick={() => {
                            onColorChange(option)
                            setSelected(option)
                        }}
                    >
                        <img
                            src={imageUrl}
                            alt={option}
                            style={{ width: '180px', height: '106px', marginBottom: '10px' }}
                        />
                        <span>{option}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Buttons;
