// ProductConfigurator.js
import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import ColorSelector from "./../Konfigurator/ColorSelector";
import TextSettings from "./../Konfigurator/TextSettings";
import SubmitButton from "./../Konfigurator/SubmitButton";
import ConfigList from "./ConfigList";
import KlipsSelector from "../Konfigurator/KlipsSelector";

const ProductConfigurator = ({ navn, produktpris, prismeter, harLengdemeter, harLengdecm, harBredde, harKrokband, harHandtak, harKrok, harTekst, harKlips, harRing, harFarge2 }) => {
    const [farge, setFarge] = useState("Lysblå");
    const [farge2, setFarge2] = useState("");
    const [onskerFarge2, setOnskerFarge2] = useState(false);
    const [onskerTekst, setOnskerTekst] = useState(false);
    const [vinyltekst, setVinyltekst] = useState("Hundenavn");
    const [fontfarge, setFontfarge] = useState("#c0c0c0");
    const [font, setFont] = useState("Arial");
    const [configurations, setConfigurations] = useState([]);
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
    const [lengde, setLengde] = useState(0);
    const [bredde, setBredde] = useState(16);
    const [detaljefarger, setDetaljefarger] = useState("sølv");
    const [klips, setKlips] = useState("");
    const [pris, setPris] = useState(produktpris);
    const meterpris = prismeter;
    const produktnavn = navn;
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
    const [harDataILocalStorage, setHarDataILocalStorage] = useState(false);

    useEffect(() => {
        // Load configurations from localStorage when the component mounts
        const savedConfigurations = JSON.parse(localStorage.getItem("productConfigurations"));
        if (savedConfigurations) {
            setConfigurations(savedConfigurations);
        }
    }, []);

    useEffect(() => {
        if (harLengdemeterbool) {
            const calculatedPrice = produktpris + (lengde * meterpris);
            setPris(calculatedPrice);
        }
        else {
            setPris(produktpris);
        }
    }, [lengde, harLengdemeterbool, produktpris, meterpris]);


    useEffect(() => {
        // Save configurations to localStorage whenever they change
      if(configurations.length > 0) localStorage.setItem("productConfigurations", JSON.stringify(configurations));
    }, [configurations]);

    const handleOnskerTekstChange = (e) => {
        setOnskerTekst(e.target.checked);
    };

    const handleOnskerFarge2Change = (e) => {
        setOnskerFarge2(e.target.checked);
    };
    const handleColorChange = (color) => {
        setFarge(color);
    };

    const handleColorChange2 = (e) => {
        setFarge2(e.target.value);
    }

    const handleKlipsChange = (color) => {
        setKlips(color);
    };

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
            klips,
            pris
        };

        setConfigurations([...configurations, newConfig]);
        setSelectedConfigIndex(null);
        setHarDataILocalStorage(true);
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
        const dataILocalStorage = localStorage.getItem('productConfigurations'); // Endre 'dinNokkel' til nøkkelen du bruker i localstorage
        if (!dataILocalStorage) {
            setHarDataILocalStorage(false);
        }
    };

    return (
        <div>
            <h2>Product Configurator</h2>
            <ColorSelector farge={farge} onColorChange={handleColorChange} />
            {harFarge2bool && (
                <>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={onskerFarge2}
                                onChange={handleOnskerFarge2Change}
                            />
                            Ønsker du en farge til?
                        </label>
                    </div>
                    {onskerFarge2 && (
                        <ColorSelector farge={farge2} onColorChange={handleColorChange2} />
                    )}
                </>
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
                    <label><input type="radio" value="16" onChange={handleBreddeChange} />16 mm</label>
                    <label><input type="radio" value="25" onChange={handleBreddeChange}/>25 mm</label>
                </>
            )}
            <div>
                <p>Metallfarge(skruer,kroker,d-ring):</p>
                <label><input type="radio" value="sølv" checked={detaljefarger === 'sølv'} onChange={handleDetaljefarger} />Sølv</label>
                <label><input type="radio" value="gull" checked={detaljefarger === 'gull'} onChange={handleDetaljefarger}/>Gull</label>
            </div>
            {harKlipsbool && (
                <KlipsSelector farge={klips} onColorChange={handleKlipsChange}/>
            )}
            {harTekstbool && (
                <>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={onskerTekst}
                            onChange={handleOnskerTekstChange}
                        />
                        Ønsker du tekst?
                    </label>
                </div>
                {onskerTekst && (
                    <>
                    <TextSettings
                        vinyltekst={vinyltekst}
                        onTextChange={handleTextChange}
                        fontfarge={fontfarge}
                        onTextColorChange={handleTextColorChange}
                        font={font}
                        onFontChange={handleFontChange}
                    />
                        <ProductDisplay farge={farge} vinyltekst={vinyltekst} fontfarge={fontfarge} font={font} />
                    </>
                )}
                </>
            )}
            <p>Price: {pris} NOK</p>
            <SubmitButton
                onSaveConfig={selectedConfigIndex !== null ? handleEditConfig : handleAddConfig}
                onDeleteConfig={selectedConfigIndex !== null ? () => handleDeleteConfig(selectedConfigIndex) : null}
            />
            {harDataILocalStorage && (
            <ConfigList
                configurations={configurations}
                onEditConfig={handleEditConfig}
                onDeleteConfig={handleDeleteConfig}
            />
            )}
        </div>
    );
};

export default ProductConfigurator;

