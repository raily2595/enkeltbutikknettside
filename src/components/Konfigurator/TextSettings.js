// TextSettings.js
import React from "react";

const TextSettings = ({ text, onTextChange, textColor, onTextColorChange, font, onFontChange }) => {
    const fonts = ["Arial", "Helvetica", "Times New Roman", "Courier New"];

    return (
        <div>
            <h3>Text Settings</h3>
            <div>
                <label>
                    Text:
                    <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Text Color:
                    <input type="color" value={textColor} onChange={(e) => onTextColorChange(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Font:
                    <select value={font} onChange={(e) => onFontChange(e.target.value)}>
                        {fonts.map((fontOption) => (
                            <option key={fontOption} value={fontOption}>
                                {fontOption}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
};

export default TextSettings;
