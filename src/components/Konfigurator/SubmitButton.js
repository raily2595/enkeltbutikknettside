// SubmitButton.js
import React from "react";

const SubmitButton = ({ onSaveConfig }) => {
    const handleSave = () => {
        onSaveConfig();
    };

    return (
        <div>
            <button onClick={handleSave}>Save Configuration</button>
        </div>
    );
};

export default SubmitButton;
