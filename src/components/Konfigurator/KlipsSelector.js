import React from 'react';

const colors = ["Svart", "Armygrønn", "Fiolett", "Aquablå", "Hvit", "Beige"];

const calculateBackgroundColor = (inputColor) => {
    // Mapp inngangsfargen til ønsket bakgrunnsfarge
    switch (inputColor) {
        case "Svart":
            return "#010101";
        case "Armygrønn":
            return "#5d5c40";
        case "Fiolett":
            return "#cb95bd";
        case "Aquablå":
            return "#9fc1bf";
        case "Hvit":
            return "#f6f7f5";
        case "Beige":
            return "#d3b284";
        default:
            return "#5391FE"; // Bruk inngangsfargen hvis den ikke matcher noen av de definerte fargene
    }
};

const KlipsButtons = ({ onColorChange }) => {
    return (
        <div>
            <h3>Select Color</h3>
            {colors.map((color) => (
                <button
                    key={color}
                    style={{ backgroundColor: calculateBackgroundColor(color) }}
                    onClick={() => onColorChange(color)}
                >
                    {color}
                </button>
            ))}
        </div>
    );
};

export default KlipsButtons;
