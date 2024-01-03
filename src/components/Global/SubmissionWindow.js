import React from "react";

const SubmissionWindow = ({ onClose, summary }) => {
    return (
        <div className="submission-window">
            <button className="close-button" onClick={onClose}>
                X
            </button>
            <h2>Lagt til</h2>
            <p>{summary}</p>
        </div>
    );
};

export default SubmissionWindow;
