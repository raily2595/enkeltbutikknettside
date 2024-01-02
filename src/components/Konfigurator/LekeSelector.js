import React, { useState } from 'react';

// Maps option names to image URLs
const options = {
    HoleeRollerXS: `${process.env.PUBLIC_URL}/leker/leke.png`,
    HoleeRollerS: `${process.env.PUBLIC_URL}/leker/leke.png`,
    HoleeRollerM: `${process.env.PUBLIC_URL}/leker/leke.png`,
    HoleeRollerL: `${process.env.PUBLIC_URL}/leker/leke.png`,
};

const Buttons = ({ onColorChange }) => {
    const defaultOption = Object.keys(options)[0];
    const [selected, setSelected] = useState(defaultOption); // Initialize with a default selection
    return (
        <div>
            <h3>Velg leke</h3>
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
                            style={{ width: '180px', height: '180px', marginBottom: '10px' }}
                        />
                        <span>{option}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Buttons;
