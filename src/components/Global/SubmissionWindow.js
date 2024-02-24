import React from "react";
import { NavLink } from "react-router-dom";

const SubmissionWindow = ({ onClose, onContinueShopping, summary }) => {
    return (
        <div className="submission-window">
            <button className="close-button" onClick={onClose}>
                X
            </button>
            <h2>Lagt til i handlekurv</h2>
            <p>{summary}</p>
            <div >
                <button className="card-button" onClick={onContinueShopping}>Fortsett å handle</button>
                <NavLink
                    className="card-button"
                    exact="true"
                    to="/handlekurv"
                >
                    Til Handlekurv
                </NavLink>
            </div>
        </div>
    );
};

export default SubmissionWindow;
