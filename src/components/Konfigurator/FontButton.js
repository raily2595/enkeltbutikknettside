import React from 'react';

const Button = ({ text, font }) => {
    const buttonStyle = {
        fontFamily: font // Setter fonten basert på input
    };

    return (
        <button style={buttonStyle} className="custom-button">
            {text}
        </button>
    );
};

export default Button;
