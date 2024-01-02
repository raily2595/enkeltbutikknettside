import React from 'react';
import PictureButtons from "../Konfigurator/PictureSelector";
import ColorButtons from "../Konfigurator/ColorSelector";

const metallValg = {
    Sølv: `${process.env.PUBLIC_URL}/metall/sølvmetall.png`,
    Gull: `${process.env.PUBLIC_URL}/metall/gullmetall.png`,
};

const lekeValg = {
    HoleeRollerXS: `${process.env.PUBLIC_URL}/leker/leke.png`,
    HoleeRollerS: `${process.env.PUBLIC_URL}/leker/leke.png`,
    HoleeRollerM: `${process.env.PUBLIC_URL}/leker/leke.png`,
    HoleeRollerL: `${process.env.PUBLIC_URL}/leker/leke.png`,
};

const klipsValg = {
    Svart: `${process.env.PUBLIC_URL}/klips/svartklips.jpg`,
    Militærgrønn: `${process.env.PUBLIC_URL}/klips/armygrønnklips.jpg`,
    Fiolett: `${process.env.PUBLIC_URL}/klips/fiolettklips.jpg`,
    Aquablå: `${process.env.PUBLIC_URL}/klips/aquablåklips.jpg`,
    Hvit: `${process.env.PUBLIC_URL}/klips/hvitklips.jpg`,
    Beige: `${process.env.PUBLIC_URL}/klips/beigeklips.jpg`,
};

const biothaneValg = ["Lyseblå", "Laguneblå", "Karibigrønn", "Eplegrønn", "Ferskenoransje", "Beige", "Neonrosa", "Ametyst", "Korall", "Rød", "Vinrød", "Rødbrun"];

const vinylValg = ["Sølv", "Gull", "Hvit", "Svart", "Lysegrønn", "Mørkegrønn", "Neongull", "Neonoransje", "Himmelblå", "Mørkeblå", "Rød", "Brun", "Turkis", "Lyserosa", "Mørkerosa", "Lilla", "Sand"];

export const MetallSelector = ({ onSelection }) => (
    <PictureButtons options={metallValg} onSelectionChange={onSelection} />
);

export const LekeSelector = ({ onSelection }) => (
    <PictureButtons options={lekeValg} onSelectionChange={onSelection} />
);

export const KlipsSelector = ({ onSelection }) => (
    <PictureButtons options={klipsValg} onSelectionChange={onSelection} />
);

export const BiothaneSelector = ({ onSelection }) => (
    <ColorButtons options={biothaneValg} onSelectionChange={onSelection} />
);

export const VinylSelector = ({ onSelection }) => (
    <ColorButtons options={vinylValg} onSelectionChange={onSelection} />
);