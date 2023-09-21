// ProductDisplay.js
import React from "react";

const ProductDisplay = ({ farge, vinyltekst, fontfarge, font }) => {
    return (
        <div>
            <h3>Product Preview</h3>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: farge,
                    color: fontfarge,
                    fontFamily: font,
                }}
            >
                {vinyltekst}
            </div>
        </div>
    );
};

export default ProductDisplay;
