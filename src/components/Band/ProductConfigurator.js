// ProductConfigurator.js
import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import ColorSelector from "./../Konfigurator/ColorSelector";
import TextSettings from "./../Konfigurator/TextSettings";
import SubmitButton from "./../Konfigurator/SubmitButton";
import ConfigList from "./ConfigList";

const ProductConfigurator = () => {
    const [selectedColor, setSelectedColor] = useState("red");
    const [text, setText] = useState("Custom Text");
    const [textColor, setTextColor] = useState("#000000");
    const [font, setFont] = useState("Arial");
    const [configurations, setConfigurations] = useState([]);
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);

    useEffect(() => {
        // Load configurations from localStorage when the component mounts
        const savedConfigurations = JSON.parse(localStorage.getItem("productConfigurations"));
        if (savedConfigurations) {
            setConfigurations(savedConfigurations);
        }
    }, []);

    useEffect(() => {
        // Save configurations to localStorage whenever they change
      if(configurations.length > 0) localStorage.setItem("productConfigurations", JSON.stringify(configurations));
    }, [configurations]);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleTextChange = (newText) => {
        setText(newText);
    };

    const handleTextColorChange = (newColor) => {
        setTextColor(newColor);
    };

    const handleFontChange = (newFont) => {
        setFont(newFont);
    };

    const handleAddConfig = () => {
        const newConfig = {
            selectedColor,
            text,
            textColor,
            font,
        };
        setConfigurations([...configurations, newConfig]);
        setSelectedConfigIndex(null);
        alert("Configuration added!");
    };

    const handleEditConfig = (index) => {
        setSelectedConfigIndex(index);
        const selectedConfig = configurations[index];
        setSelectedColor(selectedConfig.selectedColor);
        setText(selectedConfig.text);
        setTextColor(selectedConfig.textColor);
        setFont(selectedConfig.font);
    };

    const handleDeleteConfig = (index) => {
        const updatedConfigurations = [...configurations];
        updatedConfigurations.splice(index, 1);
        setConfigurations(updatedConfigurations);
        alert("Configuration deleted!");
    };

    return (
        <div>
            <h2>Product Configurator</h2>
            <ColorSelector selectedColor={selectedColor} onColorChange={handleColorChange} />
            <TextSettings
                text={text}
                onTextChange={handleTextChange}
                textColor={textColor}
                onTextColorChange={handleTextColorChange}
                font={font}
                onFontChange={handleFontChange}
            />
            <ProductDisplay selectedColor={selectedColor} text={text} textColor={textColor} font={font} />
            <SubmitButton
                onSaveConfig={selectedConfigIndex !== null ? handleEditConfig : handleAddConfig}
                onDeleteConfig={selectedConfigIndex !== null ? () => handleDeleteConfig(selectedConfigIndex) : null}
            />
            <ConfigList
                configurations={configurations}
                onEditConfig={handleEditConfig}
                onDeleteConfig={handleDeleteConfig}
            />
        </div>
    );
};

export default ProductConfigurator;

