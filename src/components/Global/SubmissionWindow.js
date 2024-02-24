import React from "react";

const SubmissionWindow = ({ onClose }) => {
    return (
        <div className="submission-window">
            <button className="close-button" onClick={onClose}>
                X
            </button>
            <h2>Lagt til i handlekurv</h2>
        </div>
    );
};

export default SubmissionWindow;
