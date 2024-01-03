// ProductConfigurator.js
import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import TextSettings from "../Konfigurator/TextSettings";
import SubmitButton from "../Konfigurator/SubmitButton";
import Handlekurv from "./Handlekurv";
import SubmissionWindow from "./SubmissionWindow";
import { BiothaneSelector, VinylSelector, MetallSelector, LekeSelector, KlipsSelector } from '../Konfigurator/Selectors';

const ProductConfigurator = ({ navn, produktpris, prismeter, harLengdemeter, harLengdecm, harBredde, harKrokband, harHandtak, harKrok, harTekst, harKlips, harRing, harFarge2, harLeke }) => {
    const [farge, setFarge] = useState("Lyseblå");
    const [farge2, setFarge2] = useState("");
    const [onskerFarge2, setOnskerFarge2] = useState(false);
    const [onskerTekst, setOnskerTekst] = useState(false);
    const [vinyltekst, setVinyltekst] = useState("Hundenavn");
    const [fontfarge, setFontfarge] = useState("Sølv");
    const [font, setFont] = useState("Handskrevet");
    const [configurations, setConfigurations] = useState([]);
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
    const [lengde, setLengde] = useState(0);
    const [bredde, setBredde] = useState(25);
    const [detaljefarger, setDetaljefarger] = useState("sølv");
    const [klips, setKlips] = useState("Svart");
    const [pris, setPris] = useState(produktpris);
    const [kommentar, setKommentar] = useState('');
    const meterpris = prismeter;
    const [lekepris, setLekePris] = useState(170);
    const [valgtLeke, setValgtLeke] = useState("HoleeRollerM");
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
        CheckHandlekurv();
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
        localStorage.setItem("productConfigurations", JSON.stringify(configurations));
    }, [configurations]);

    const handleOnskerTekstChange = (e) => {
        setOnskerTekst(e.target.checked);
    };

    const handleProductSelect = (leke) => {
        setValgtLeke(leke);
        switch (leke) {
            case "HoleeRollerXS":
                setLekePris(110);
                break;
            case "HoleeRollerS":
                setLekePris(150);
                break;
            case "HoleeRollerM":
                setLekePris(170);
                break;
            case "HoleeRollerL":
                setLekePris(230);
                break;
            default:
                break;
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

    const handleTextColorChange = (color) => {
        setFontfarge(color);
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
        CheckHandlekurv();

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
        CheckHandlekurv();
    };

    const CheckHandlekurv = () => {
        const dataILocalStorage = localStorage.getItem('productConfigurations');
        setHarDataILocalStorage(dataILocalStorage);
    }

    return (
        <div>
            <div className="konfigurator-card">
                <label className="konfigurator-tittel">Hovedfarge</label>
                <BiothaneSelector onSelection={handleColorChange} />
                <hr className="konfigurator-divider" />
                {harFarge2bool && (
                    <>
                        <label className="konfigurator-tittel">
                            <input type="checkbox" checked={onskerFarge2} onChange={handleOnskerFarge2Change} />
                            Ønsker du en farge til?
                        </label>
                        {onskerFarge2 && (
                            <>
                                <BiothaneSelector onSelection={handleColorChange2} />
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
                                    font={font}
                                    onFontChange={handleFontChange}
                                />
                                <VinylSelector onSelection={handleTextColorChange} />
                                <ProductDisplay farge={farge} vinyltekst={vinyltekst} fontfarge={fontfarge} font={font} />
                            </>
                        )}
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harLengdecmbool && (
                    <>
                        <div className="konfigurator-tittel">
                            <label>Lengde i cm</label>
                        </div>
                        <input type="number" id="lengdecminput" value={lengde} placeholder="45" onChange={handleLengdeChange} style={{ fontSize: 16, }} />
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harLengdemeterbool && (
                    <>
                        <div className="konfigurator-tittel">
                            <label>Lengde i meter</label>
                        </div>
                        <input type="number" id="lengdemeterinput" value={lengde} placeholder="1,5" onChange={handleLengdeChange} style={{ fontSize: 16, }} />
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harBreddebool && (
                    <>
                        <div className="konfigurator-tittel">
                            <label>Bredde</label>
                        </div>
                        <div>
                            <label><input name="bredde" type="radio" style={{ margin: '12px' }} value="16" onChange={handleBreddeChange} />16 mm - for hunder under 5kg</label>
                        </div>
                        <div>
                            <label><input name="bredde" type="radio" style={{ margin: '12px' }} value="25" onChange={handleBreddeChange} checked={true} />25 mm - passer de fleste hunder</label>
                        </div>
                        <hr className="konfigurator-divider" />
                    </>
                )}
                <>
                    <div className="konfigurator-tittel">
                        <label>Metallfarge (skruer, kroker, d-ring)</label>
                    </div>
                    <MetallSelector onSelection={handleDetaljefarger} />
                    <hr className="konfigurator-divider" />
                </>
                {harKlipsbool && (
                    <>
                        <div className="konfigurator-tittel">
                            <label>Klipsfarge</label>
                        </div>
                        <KlipsSelector farge={klips} onSelection={handleKlipsChange} />
                        <hr className="konfigurator-divider" />
                    </>
                )}
                {harLekebool && (
                    <>
                        <div className="konfigurator-tittel">
                            <label>Velg leke</label>
                        </div>
                        <LekeSelector onSelection={handleProductSelect} />
                        <div className="konfigurator-tittel">
                            <label>XS = 5cm, S = 8cm, M = 12cm, L = 14cm</label>
                        </div>
                        <hr className="konfigurator-divider" />
                    </>
                )}
                <label>
                    <div className="konfigurator-tittel">
                        <label>Kommentar</label>
                    </div>
                    <textarea
                        value={kommentar}
                        onChange={handleKommentarChange}
                        rows="4"
                        cols="50"
                    />
                </label>
                <hr className="konfigurator-divider" />
                <div className="konfigurator-tittel">
                    <label>Pris: {pris} NOK</label>
                </div>
                <SubmitButton
                    onSaveConfig={handleAddConfig}
                    onDeleteConfig={selectedConfigIndex !== null ? () => handleDeleteConfig(selectedConfigIndex) : null}
                />
            </div>
            {showSubmissionWindow && (
                <div className="konfigurator-card">
                    <SubmissionWindow
                        onClose={handleClearSubmissionWindow}
                        summary={submissionSummary}
                    />
                </div>
            )}
            {
                harDataILocalStorage && (
                    <>
                        <div className="konfigurator-card">
                            <Handlekurv
                                configurations={configurations}
                                onDeleteConfig={handleDeleteConfig}
                            />
                        </div>
                    </>
                )
            }
        </div >
    );
};

export default ProductConfigurator;

