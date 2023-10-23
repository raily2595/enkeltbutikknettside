// TextSettings.js
import React from "react";

const TextSettings = ({ text, onTextChange, onTextColorChange, font, onFontChange }) => {
    const fonts = ["Handskrevet", "Arial", "Tøff", "Courier New", "Calibri", "Comic Sans", "Stjernekrig", "Times New Roman", "Magisk", "Skog", "Tegnefilm", "Barnebok"];
    const tekstfarger = ["Sølv", "Gull", "Hvit", "Svart", "Lys grønn", "Mørk grønn", "Neon gull", "Neon orange", "Lys blå", "Mørk blå", "Rød", "Brun", "Turkis", "Lys rosa", "Mørk rosa", "Lilla","Beige"];

    const calculateTextColor = (inputColor) => {
        // Mapp inngangsfargen til ønsket bakgrunnsfarge
        switch (inputColor) {
            case "Sølv":
                return "#c0c0c0";
            case "Gull":
                return "#FFD700";
            case "Hvit":
                return "#FFFFFF";
            case "Svart":
                return "#010101";
            case "Lys grønn":
                return "#c8da2f";
            case "Mørk grønn":
                return "#12713d";
            case "Neon gull":
                return "#f3eb03";
            case "Neon orange":
                return "#f89721";
            case "Lys blå":
                return "#99dbf6";
            case "Mørk blå":
                return "#1796d4";
            case "Rød":
                return "#ce2229";
            case "Brun":
                return "#4e2022";
            case "Turkis":
                return "#c5e4cb";
            case "Lys rosa":
                return "#facfd9";
            case "Mørk rosa":
                return "#f15377";
            case "Lilla":
                return "#cfb4d3";
            case "Beige":
                return "#eed4b3";
            default:
                return "#c0c0c0"; // Bruk inngangsfargen hvis den ikke matcher noen av de definerte fargene
        }
    };

    return (
        <div>
            <h3>Text Settings</h3>
            <div>
                <label>
                    Text:
                    <input type="text" value={text} placeholder="Nila" onChange={(e) => onTextChange(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Text Color:
                    {tekstfarger.map((tekstfarge) => (
                        <button
                            key={tekstfarge}
                            style={{ backgroundColor: calculateTextColor(tekstfarge) }}
                            onClick={() => onTextColorChange(tekstfarge)}
                        >
                            {tekstfarge}
                        </button>
                    ))}
                </label>
            </div>
            <div>
                <label>
                    Skrifttype:
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
