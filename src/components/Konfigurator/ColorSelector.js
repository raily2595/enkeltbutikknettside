import React from 'react';

const colors = ["Lysblå", "Laguneblå", "Karibigrønn", "Eplegrønn", "Ferskenorange", "Beige", "Neonrosa", "Ametyst", "Korall", "Rød", "Vinrød", "Rødbrun"];

const calculateBackgroundColor = (inputColor) => {
    // Mapp inngangsfargen til ønsket bakgrunnsfarge
    switch (inputColor) {
        case "Lysblå":
            return "#5391FE";
        case "Rødbrun":
            return "#7C4E34";
        case "Korall":
            return "#e0584c";
        case "Beige":
            return "#f6b96b";
        case "Karibigrønn":
            return "#85E2BA";
        case "Eplegrønn":
            return "#6BEC85";
        case "Laguneblå":
            return "#1D97AC";
        case "Ferskenorange":
            return "#FF9849";
        case "Neonrosa":
            return "#FE5DA3";
        case "Ametyst":
            return "#966EAB";
        case "Rød":
            return "#D72C35";
        case "Vinrød":
            return "#893149";
        default:
            return "#5391FE"; // Bruk inngangsfargen hvis den ikke matcher noen av de definerte fargene
    }
};

const ColorButtons = ({ onColorChange }) => {
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

export default ColorButtons;
