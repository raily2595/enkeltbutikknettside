// ProductConfigurator.js
import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import ColorSelector from "./../Konfigurator/ColorSelector";
import TextSettings from "./../Konfigurator/TextSettings";
import SubmitButton from "./../Konfigurator/SubmitButton";
import ConfigList from "./ConfigList";

const ProductConfigurator = () => {
    const [Farge, setFarge] = useState("red");
    const [Vinyltekst, setVinyltekst] = useState("Custom Text");
    const [Fontfarge, setFontfarge] = useState("#000000");
    const [Font, setFont] = useState("Arial");
    const [configurations, setConfigurations] = useState([]);
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
    const Produktnavn = "Leiebånd";
    const Lengde = 2;
    const Bredde = 16;
    const Detaljefarger = "sølv";
    const Pris = 200;

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
            Farge,
            Vinyltekst,
            Fontfarge,
            Font,
            Produktnavn,
            Lengde,
            Bredde,
            Detaljefarger,
            Pris,
        };
        setConfigurations([...configurations, newConfig]);
        setSelectedConfigIndex(null);
        alert("Configuration added!");
    };

    const handleEditConfig = (index) => {
        setSelectedConfigIndex(index);
        const selectedConfig = configurations[index];
        setFarge(selectedConfig.selectedColor);
        setVinyltekst(selectedConfig.text);
        setFontfarge(selectedConfig.textColor);
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
            <ColorSelector Farge={Farge} onColorChange={handleColorChange} />
            <TextSettings
                Vinyltekst={Vinyltekst}
                onTextChange={handleTextChange}
                Fontfarge={Fontfarge}
                onTextColorChange={handleTextColorChange}
                Font={Font}
                onFontChange={handleFontChange}
            />
            <ProductDisplay Farge={Farge} Vinyltekst={Vinyltekst} Fontfarge={Fontfarge} Font={Font} />
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

