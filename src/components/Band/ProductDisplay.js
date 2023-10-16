import React from "react";

const ProductDisplay = ({ farge, vinyltekst, fontfarge, font, pris }) => {
    // Funksjon for å beregne bakgrunnsfargen basert på inngangsverdien
    const calculateBackgroundColor = (inputColor) => {
        // Mapp inngangsfargen til ønsket bakgrunnsfarge
        switch (inputColor) {
            case "Lysblå":
                return "#5391FE";
            case "Rødbrun":
                return "#7C4E34";
            case "Korall":
                return "#e0584c";
            case "Beige":
                return "#f6b96b";
            case "Karibigrønn":
                return "#85E2BA";
            case "Eplegrønn":
                return "#6BEC85";
            case "Laguneblå":
                return "#1D97AC";
            case "Ferskenorange":
                return "#FF9849";
            case "Neonrosa":
                return "#FE5DA3";
            case "Ametyst":
                return "#966EAB";
            case "Rød":
                return "#D72C35";
            case "Vinrød":
                return "#893149";
            default:
                return "#5391FE"; // Bruk inngangsfargen hvis den ikke matcher noen av de definerte fargene
        }
    };

    const backgroundColor = calculateBackgroundColor(farge);

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

    const TextColor = calculateTextColor(fontfarge);

    return (
        <div>
            <h3>Product Preview</h3>
            <p>Price: {pris} NOK</p>
            <div
                style={{
                    width: "400px",
                    height: "200px",
                    backgroundColor: backgroundColor,
                    color: TextColor,
                    fontFamily: font,
                }}
            >
                {vinyltekst}
            </div>
        </div>
    );
};

export default ProductDisplay;
