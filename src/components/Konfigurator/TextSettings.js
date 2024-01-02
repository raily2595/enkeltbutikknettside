import React from "react";

const TextSettings = ({ text, onTextChange, font, onFontChange }) => {
    const fonts = ["Handskrevet", "Arial", "Tøff", "Courier New", "Calibri", "Comic Sans", "Stjernekrig", "Times New Roman", "Magisk", "Skog", "Tegnefilm", "Barnebok"];

    return (
        <div className="konfigurator-tekst">
            <div>
                <label>Tekst</label>
                <input
                    type="text" value={text}
                    placeholder="Hundenavn"
                    onChange={(e) => onTextChange(e.target.value)}
                    style={{ fontSize: 16, }} />
            </div>
            <div>
                <label>Skrifttype</label>
                <select
                    value={font}
                    onChange={(e) => onFontChange(e.target.value)}
                    style={{ fontSize: 16, }}  >
                    {fonts.map((fontOption) => (
                        <option key={fontOption} value={fontOption} style={{ fontSize: 16, }}>
                            {fontOption}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TextSettings;
