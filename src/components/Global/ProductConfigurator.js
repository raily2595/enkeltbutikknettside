// ProductConfigurator.js
import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import ColorSelector from "../Konfigurator/ColorSelector";
import TextSettings from "../Konfigurator/TextSettings";
import SubmitButton from "../Konfigurator/SubmitButton";
import ConfigList from "./ConfigList";
import SubmissionWindow from "./SubmissionWindow";
import { MetallSelector, LekeSelector, KlipsSelector } from '../Konfigurator/Selectors';

const ProductConfigurator = ({ navn, produktpris, prismeter, harLengdemeter, harLengdecm, harBredde, harKrokband, harHandtak, harKrok, harTekst, harKlips, harRing, harFarge2, harLeke }) => {
    const [farge, setFarge] = useState("Lysblå");
    const [farge2, setFarge2] = useState("");
    const [onskerFarge2, setOnskerFarge2] = useState(false);
    const [onskerTekst, setOnskerTekst] = useState(false);
    const [vinyltekst, setVinyltekst] = useState("Hundenavn");
    const [fontfarge, setFontfarge] = useState("#c0c0c0");
    const [font, setFont] = useState("Handskrevet");
    const [configurations, setConfigurations] = useState([]);
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
    const [lengde, setLengde] = useState(0);
    const [bredde, setBredde] = useState(16);
    const [detaljefarger, setDetaljefarger] = useState("sølv");
    const [klips, setKlips] = useState("");
    const [pris, setPris] = useState(produktpris);
    const [kommentar, setKommentar] = useState('');
    const meterpris = prismeter;
    const [lekepris, setLekePris] = useState(0);
    const [valgtLeke, setValgtLeke] = useState('');
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
    const harLekebool = harLeke;
    const [harDataILocalStorage, setHarDataILocalStorage] = useState(false);
    const [showSubmissionWindow, setShowSubmissionWindow] = useState(false); // Track whether to show the submission window
    const [submissionSummary, setSubmissionSummary] = useState(""); // Summary of choices for the submission window

    useEffect(() => {
        // Load configurations from localStorage when the component mounts
        const savedConfigurations = JSON.parse(localStorage.getItem("productConfigurations"));
        if (savedConfigurations) {
            setConfigurations(savedConfigurations);
        }
    }, []);

    useEffect(() => {
        if (harLengdemeterbool) {
            const calculatedPrice = produktpris + (lengde * meterpris) + lekepris;
            setPris(calculatedPrice);
        }
        else {
            setPris(produktpris);
        }
    }, [lengde, harLengdemeterbool, produktpris, meterpris, lekepris]);


    useEffect(() => {
        // Save configurations to localStorage whenever they change
        if (configurations.length > 0) localStorage.setItem("productConfigurations", JSON.stringify(configurations));
    }, [configurations]);

    const handleOnskerTekstChange = (e) => {
        setOnskerTekst(e.target.checked);
    };

    const handleProductSelect = (type, pris) => {
        if (valgtLeke === type) {
            // Hvis brukeren klikker på knappen til en allerede valgt leke, fjern valget
            setValgtLeke('');
            setLekePris(0);
        } else {
            setValgtLeke(type);
            setLekePris(pris);
        }
    };

    const handleOnskerFarge2Change = (e) => {
        setOnskerFarge2(e.target.checked);
    };
    const handleColorChange = (color) => {
        setFarge(color);
    };

    const handleColorChange2 = (color) => {
        setFarge2(color);
    }

    const handleKlipsChange = (color) => {
        setKlips(color);
    };

    const handleDetaljefarger = (color) => {
        setDetaljefarger(color);
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

    const handleKommentarChange = (event) => {
        setKommentar(event.target.value);
    };

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
            pris,
            onskerTekst,
            onskerFarge2,
            kommentar,
            harLekebool,
            valgtLeke,
        };

        setConfigurations([...configurations, newConfig]);
        setSelectedConfigIndex(null);
        setHarDataILocalStorage(true);
        let summary = `Produkt: ${newConfig.produktnavn},Farge: ${newConfig.farge},`;
        if (newConfig.onskerFarge2) {
            summary += ` Farge 2: ${newConfig.farge2},`;
        }
        if (newConfig.onskerTekst) {
            summary += ` VinylTekst: ${newConfig.vinyltekst},`;
            summary += ` Fontfarge: ${newConfig.fontfarge},`;
            summary += ` Font: ${newConfig.font},`;
        }
        summary += ` Lengde: ${newConfig.lengde}, Bredde: ${newConfig.bredde}, Detaljefarger: ${newConfig.detaljefarger},`
        if (harKlipsbool) {
            summary += ` Klips: ${newConfig.klips},`;
        }
        if (harLekebool) {
            summary += ` Leke: ${newConfig.valgtLeke},`;
        }
        summary += ` Pris: ${newConfig.pris}, Kommentar: ${newConfig.kommentar}`;
        setSubmissionSummary(summary); // Set the summary
        setShowSubmissionWindow(true); // Show the submission window
    };

    const handleClearSubmissionWindow = () => {
        setShowSubmissionWindow(false); // Hide the submission window
    };

    const handleDeleteConfig = (index) => {
        const updatedConfigurations = [...configurations];
        updatedConfigurations.splice(index, 1);
        setConfigurations(updatedConfigurations);
        const dataILocalStorage = localStorage.getItem('productConfigurations');
        if (!dataILocalStorage) {
            setHarDataILocalStorage(false);
        }
    };

    return (
        <div>
            <div className="konfigurator-card">
                <label className="konfigurator-tittel">Hovedfarge</label>
                <ColorSelector farge={farge} onColorChange={handleColorChange} />
                <hr className="konfigurator-divider" />
                {harFarge2bool && (
                    <>
                        <label className="konfigurator-tittel">
                            <input type="checkbox" checked={onskerFarge2} onChange={handleOnskerFarge2Change} />
                            Ønsker du en farge til?
                        </label>
                        {onskerFarge2 && (
                            <>
                                <ColorSelector farge={farge2} tittel="abc" onColorChange={handleColorChange2} />
                            </>
                        )}
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harTekstbool && (
                    <>
                        <label className="konfigurator-tittel">
                            <input
                                type="checkbox"
                                checked={onskerTekst}
                                onChange={handleOnskerTekstChange}
                            />
                            Ønsker du tekst?
                        </label>
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
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harLengdecmbool && (
                    <>
                        <h3 htmlFor="lengdecminput">Lengde i cm</h3>
                        <input type="number" id="lengdecminput" value={lengde} onChange={handleLengdeChange} style={{ fontSize: 16, }} />
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harLengdemeterbool && (
                    <>
                        <h3 htmlFor="lengdemeterinput">Lengde i meter</h3>
                        <input type="number" id="lengdemeterinput" value={lengde} onChange={handleLengdeChange} style={{ fontSize: 16, }} />
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harBreddebool && (
                    <>
                        <h3>Bredde</h3>
                        <label><input type="radio" value="16" onChange={handleBreddeChange} />16 mm</label>
                        <label><input type="radio" value="25" onChange={handleBreddeChange} />25 mm</label>
                        <hr className="konfigurator-divider" />
                    </>
                )}
                <>
                    <h3>Metallfarge (skruer, kroker, d-ring)</h3>
                    <MetallSelector handleChange={handleDetaljefarger} />
                    <hr className="konfigurator-divider" />
                </>
                {harKlipsbool && (
                    <>
                        <h3>Klipsfarge</h3>
                        <KlipsSelector farge={klips} handleChange={handleKlipsChange} />
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harLekebool && (
                    <>
                        <h3>Velg leke</h3>
                        <LekeSelector handleChange={handleProductSelect} />
                        <hr className="konfigurator-divider" />
                    </>
                )}
                <label>
                    <div className="konfigurator-tekst">
                        <h3>Kommentar</h3>
                    </div>
                    <textarea
                        value={kommentar}
                        onChange={handleKommentarChange}
                        rows="4"
                        cols="50"
                    />
                </label>
                <hr className="konfigurator-divider" />
                <h3>Pris: {pris} NOK</h3>
                <SubmitButton
                    onSaveConfig={handleAddConfig}
                    onDeleteConfig={selectedConfigIndex !== null ? () => handleDeleteConfig(selectedConfigIndex) : null}
                />
                {showSubmissionWindow && (
                    <SubmissionWindow
                        onClose={handleClearSubmissionWindow}
                        onContinueShopping={handleClearSubmissionWindow}
                        summary={submissionSummary}
                    />
                )}
            </div>
            {harDataILocalStorage && (
                <>
                    <div className="konfigurator-card">
                        <ConfigList
                            configurations={configurations}
                            onDeleteConfig={handleDeleteConfig}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductConfigurator;

