// ProductConfigurator.js
import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import ColorSelector from "./../Konfigurator/ColorSelector";
import TextSettings from "./../Konfigurator/TextSettings";
import SubmitButton from "./../Konfigurator/SubmitButton";
import ConfigList from "./ConfigList";

const ProductConfigurator = ({ navn, produktpris, prismeter, harLengdemeter, harLengdecm, harBredde, harKrokband, harHandtak, harKrok, harTekst, harKlips, harRing, harFarge2 }) => {
    const [farge, setFarge] = useState("Lysblå");
    const [farge2, setFarge2] = useState("");
    const [vinyltekst, setVinyltekst] = useState("Custom Text");
    const [fontfarge, setFontfarge] = useState("#c0c0c0");
    const [font, setFont] = useState("Arial");
    const [configurations, setConfigurations] = useState([]);
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
    const produktnavn = navn;
    const [lengde, setLengde] = useState(0);
    const [bredde, setBredde] = useState(16);
    const [detaljefarger, setDetaljefarger] = useState("sølv");
    const [pris, setPris] = useState(produktpris);
    const meterpris = prismeter;
    const harLengdemeterbool = harLengdemeter;
    const harLengdecmbool = harLengdecm;
    const harBreddebool = harBredde;
    const harKrokbandbool = harKrokband;
    const harHandtakbool = harHandtak;
    const harKrokbool = harKrok;
    const harTekstbool = harTekst;
    const harKlipsbool = harKlips;
    const harRingbool = harRing;
    const harFarge2bool = harFarge2;

    useEffect(() => {
        // Load configurations from localStorage when the component mounts
        const savedConfigurations = JSON.parse(localStorage.getItem("productConfigurations"));
        if (savedConfigurations) {
            setConfigurations(savedConfigurations);
        }
    }, []);

    useEffect(() => {
        // Add a new useEffect to update the price when either harLengdemeterbool or harLengdecmbool is true
        if (harLengdemeterbool || harLengdecmbool) {
            const calculatedPrice = produktpris + (lengde * prismeter);
            setPris(calculatedPrice);
        }
    }, [lengde, harLengdemeterbool, harLengdecmbool, produktpris, prismeter]);


    useEffect(() => {
        // Save configurations to localStorage whenever they change
      if(configurations.length > 0) localStorage.setItem("productConfigurations", JSON.stringify(configurations));
    }, [configurations]);

    const handleColorChange = (color) => {
        setFarge(color);
    };

    const handleColorChange2 = (e) => {
        setFarge2(e.target.value);
    }

    const handleDetaljefarger = (e) => {
        setDetaljefarger(e.target.value);
    }

    const handleTextChange = (newText) => {
        setVinyltekst(newText);
    };

    const handleTextColorChange = (newColor) => {
        setFontfarge(newColor);
    };

    const handleFontChange = (newFont) => {
        setFont(newFont);
    };

    const handleLengdeChange = (e) => {
        setLengde(e.target.value);
    }

    const handleBreddeChange = (e) => {
        setBredde(e.target.value);
    }

    const handleAddConfig = () => {
        // Calculate the price based on the formula: ProductPrice + (Length * PricePerMeter)
        const calculatedPrice = pris + (lengde * meterpris);

        const newConfig = {
            farge,
            farge2,
            vinyltekst,
            fontfarge,
            font,
            produktnavn,
            lengde,
            bredde,
            detaljefarger,
            pris: calculatedPrice, // Include the calculated price in the configuration
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
            {harFarge2bool && (
                <ColorSelector farge={farge2} onColorChange={handleColorChange2} />
            )}
            {harLengdecmbool && (
                <>
                    <label htmlFor="lengdecminput">Lengde i cm:</label>
                    <input type="number" id="lengdecminput" className="brukerinput" value={lengde} onChange={handleLengdeChange}/>
                </>
            )}
            {harLengdemeterbool && (
                <>
                    <label htmlFor="lengdemeterinput">Lengde i meter:</label>
                    <input type="number" id="lengdecminput" className="brukerinput" value={lengde} onChange={handleLengdeChange}/>
                </>
            )}
            {harBreddebool && (
                <>
                    <p>Bredde:</p>
                    <input type="radio" id="16" name="bredde" value={bredde} onChange={handleBreddeChange} />
                    <label htmlFor="16">16 mm</label>
                    <input type="radio" id="25" name="bredde" value={bredde} onChange={handleBreddeChange}/>
                    <label htmlFor="25">25 mm</label>
                </>
            )}
            {harTekstbool && (
            <TextSettings
                vinyltekst={vinyltekst}
                onTextChange={handleTextChange}
                fontfarge={fontfarge}
                onTextColorChange={handleTextColorChange}
                font={font}
                onFontChange={handleFontChange}
            />)}
            <ProductDisplay farge={farge} vinyltekst={vinyltekst} fontfarge={fontfarge} font={font} pris={pris} />
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

