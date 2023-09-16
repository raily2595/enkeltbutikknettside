// ProductDisplay.js
import React from "react";

const ProductDisplay = ({ selectedColor, text, textColor, font }) => {
    return (
        <div>
            <h3>Product Preview</h3>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: selectedColor,
                    color: textColor,
                    fontFamily: font,
                }}
            >
                {text}
            </div>
        </div>
    );
};

export default ProductDisplay;
