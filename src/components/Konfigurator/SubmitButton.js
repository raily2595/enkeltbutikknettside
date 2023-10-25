// SubmitButton.js
import React from "react";

const SubmitButton = ({ onSaveConfig }) => {
    const handleSave = () => {
        onSaveConfig();
    };

    return (
        <div>
            <button className="konfigurator-button" onClick={handleSave}>Legg i handlekurv</button>
        </div>
    );
};

export default SubmitButton;
