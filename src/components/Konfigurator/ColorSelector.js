// ColorSelector.js
import React from "react";

const ColorSelector = ({ farge, onColorChange }) => {
    const colors = ["red", "blue", "green"];

    return (
        <div>
            <h3>Select Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        value={color}
                        checked={farge === color}
                        onChange={() => onColorChange(color)}
                    />
                    {color}
                </label>
            ))}
        </div>
    );
};

export default ColorSelector;
