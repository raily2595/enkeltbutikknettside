// ColorSelector.js
import React from "react";

const ColorSelector = ({ farge, onColorChange }) => {
    const colors = ["Lysblå", "Rødbrun", "Korall", "Beige", "Karibigrønn", "Eplegrønn", "Laguneblå", "Ferskenorange", "Neonrosa", "Ametyst", "Rød", "Vinrød"];

    return (
        <div>
            <h3>Select Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        value={color}
                        checked={farge === color || ( color === "Lysblå" )}
                        onChange={() => onColorChange(color)}
                    />
                    {color}
                </label>
            ))}
        </div>
    );
};

export default ColorSelector;
