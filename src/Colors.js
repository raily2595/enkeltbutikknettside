const mapColorToHex = (inputColor) => {
    switch (inputColor) {
        case "Lyseblå":
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
        case "Ferskenoransje":
            return "#FF9849";
        case "Neonrosa":
            return "#FE5DA3";
        case "Ametyst":
            return "#966EAB";
        case "Rød":
            return "#D72C35";
        case "Vinrød":
            return "#893149";

        case "Sølv":
            return "#c0c0c0";
        case "Gull":
            return "#FFD700";
        case "Hvit":
            return "#FFFFFF";
        case "Svart":
            return "#010101";
        case "Lysegrønn":
            return "#c8da2f";
        case "Mørkegrønn":
            return "#12713d";
        case "Neongull":
            return "#f3eb03";
        case "Neonoransje":
            return "#f89721";
        case "Lyseblå2":
            return "#99dbf6";
        case "Mørkeblå":
            return "#1796d4";
        case "Rød":
            return "#ce2229";
        case "Brun":
            return "#4e2022";
        case "Turkis":
            return "#c5e4cb";
        case "Lyserosa":
            return "#facfd9";
        case "Mørkerosa":
            return "#f15377";
        case "Lilla":
            return "#cfb4d3";
        case "Beige2":
            return "#eed4b3";

        default:
            return "#5391FE";
    }
};

export default mapColorToHex;