const mapColorToHex = (inputColor) => {
    switch (inputColor) {
        case "Lyseblå":
            return "#007AB4";
        case "Rødbrun":
            return "#795146";
        case "Korall":
            return "#F36F77";
        case "Beige":
            return "#BCA062";
        case "Karibigrønn":
            return "#6EE6C7";
        case "Eplegrønn":
            return "#A6DB4F";
        case "Laguneblå":
            return "#007990";
        case "Ferskenoransje":
            return "#FF8F1F";
        case "Neonrosa":
            return "#FE5289";
        case "Ametyst":
            return "#966EAB";
        case "Rød":
            return "#BA2F37";
        case "Vinrød":
            return "#774251";
        case "Kongeblå":
            return "#3C4492";
        case "Turkis":
            return "#5BD1EC";
        case "Oliven":
            return "#69614D";
        case "Pastell Lilla":
            return "#B4A4BB";
        case "Pastell blå":
            return "#A0B3C3";
        case "Lys Beige":
            return "#EBD0BD";
        case "Petrolblå":
            return "#798EAD";
        case "Rosegull":
            return "#F0ACAC";
        case "Sølv":
            return "#9D9F9E";
        case "Salvie Grønn":
            return "#93A287";
        case "Polarblå":
            return "#9EB6D0";
        case "Lys kobber":
            return "#FFBB9E";
        case "Gul":
            return "#FECA15";


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
        case "Himmelblå":
            return "#99dbf6";
        case "Mørkeblå":
            return "#1796d4";
        case "Brun":
            return "#4e2022";
        case "Lys Turkis":
            return "#c5e4cb";
        case "Lyserosa":
            return "#facfd9";
        case "Mørkerosa":
            return "#f15377";
        case "Lilla":
            return "#cfb4d3";
        case "Sand":
            return "#eed4b3";

        default:
            return "#5391FE";
    }
};

export default mapColorToHex;