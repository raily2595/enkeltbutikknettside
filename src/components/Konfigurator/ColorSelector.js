import React, { useState } from 'react';
import mapColorToHex from 'Colors';

const ColorButtons = ({ options, def, onSelectionChange }) => {
    // Initialize with a default selection
    const defaultOption = options[def];
    const [selected, setSelected] = useState(defaultOption);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <div className='konfigurator-fargeboks'>
                {options.map((option) => (
                    <button
                        key={option}
                        style={{
                            backgroundColor: mapColorToHex(option),
                            padding: 6,
                            width: 180,
                            fontSize: 16,
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