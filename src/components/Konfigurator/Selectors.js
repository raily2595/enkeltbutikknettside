import React from 'react';
import PictureButtons from "../Konfigurator/PictureSelector";

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

export const MetallSelector = ({ handleChange }) => (
    <PictureButtons options={metallValg} onColorChange={handleChange} />
);

export const LekeSelector = ({ handleChange }) => (
    <PictureButtons options={lekeValg} onColorChange={handleChange} />
);

export const KlipsSelector = ({ handleChange }) => (
    <PictureButtons options={klipsValg} onColorChange={handleChange} />
);