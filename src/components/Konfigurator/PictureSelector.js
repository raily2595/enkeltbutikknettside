import React, { useState } from 'react';

const PictureButtons = ({ options, def, onSelectionChange }) => {
    // Initialize with a default selection
    const defaultOption = Object.keys(options)[def];
    const [selected, setSelected] = useState(defaultOption);

    return (
        <div className="picture-content">
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
                        onSelectionChange(option)
                        setSelected(option)
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={option}
                        style={{ width: '180px', marginBottom: '10px' }}
                    />
                    <span>{option}</span>
                </button>
            ))}
        </div>
    );
};

export default PictureButtons;
