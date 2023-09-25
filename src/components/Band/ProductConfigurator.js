// ProductConfigurator.js
import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import ColorSelector from "./../Konfigurator/ColorSelector";
import TextSettings from "./../Konfigurator/TextSettings";
import SubmitButton from "./../Konfigurator/SubmitButton";
import ConfigList from "./ConfigList";

const ProductConfigurator = (navn, produktpris) => {
    const [farge, setFarge] = useState("red");
    const [vinyltekst, setVinyltekst] = useState("Custom Text");
    const [fontfarge, setFontfarge] = useState("#000000");
    const [font, setFont] = useState("Arial");
    const [configurations, setConfigurations] = useState([]);
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
    const produktnavn = navn;
    const lengde = 2;
    const bredde = 16;
    const detaljefarger = "sølv";
    const pris = produktpris;

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
        setFarge(color);
    };

    const handleTextChange = (newText) => {
        setVinyltekst(newText);
    };

    const handleTextColorChange = (newColor) => {
        setFontfarge(newColor);
    };

    const handleFontChange = (newFont) => {
        setFont(newFont);
    };

    const handleAddConfig = () => {
        const newConfig = {
            farge,
            vinyltekst,
            fontfarge,
            font,
            produktnavn,
            lengde,
            bredde,
            detaljefarger,
            pris,
        };
        setConfigurations([...configurations, newConfig]);
        setSelectedConfigIndex(null);
        alert("Configuration added!");
    };

    const handleEditConfig = (index) => {
        setSelectedConfigIndex(index);
        const selectedConfig = configurations[index];
        setFarge(selectedConfig.selectedColor);
        setVinyltekst(selectedConfig.vinyltekst);
        setFontfarge(selectedConfig.fontfarge);
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
            <ColorSelector farge={farge} onColorChange={handleColorChange} />
            <TextSettings
                vinyltekst={vinyltekst}
                onTextChange={handleTextChange}
                fontfarge={fontfarge}
                onTextColorChange={handleTextColorChange}
                font={font}
                onFontChange={handleFontChange}
            />
            <ProductDisplay farge={farge} vinyltekst={vinyltekst} fontfarge={fontfarge} font={font} />
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

