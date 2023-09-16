// ColorSelector.js
import React from "react";

const ColorSelector = ({ selectedColor, onColorChange }) => {
    const colors = ["red", "blue", "green"];

    return (
        <div>
            <h3>Select Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => onColorChange(color)}
                    />
                    {color}
                </label>
            ))}
        </div>
    );
};

export default ColorSelector;
