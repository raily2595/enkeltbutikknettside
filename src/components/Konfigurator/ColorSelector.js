import React, { useState } from 'react';
import mapColorToHex from 'Colors';

const ColorButtons = ({ options, def, onSelectionChange }) => {
    // Initialize with a default selection
    const defaultOption = options[def];
    const [selected, setSelected] = useState(defaultOption);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='konfigurator-fargeboks'>
                {options.map((option) => (
                    <button
                        className="color-button"
                        key={option}
                        style={{
                            backgroundColor: mapColorToHex(option),
                            padding: '6px 12px', // Justerer padding for mobilvisning
                            width: '180px', // Beholder bredden for større skjermer
                            fontSize: '16px', // Endrer fontstørrelse for mobilvisning
                            fontWeight: 'bold',
                            border: option === selected ? "4px solid #000" : "4px solid transparent", //Border for the selected color
                        }}
                        onClick={() => {
                            onSelectionChange(option);
                            setSelected(option);
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ColorButtons;