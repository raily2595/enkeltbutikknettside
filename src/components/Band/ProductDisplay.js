// ProductDisplay.js
import React from "react";

const ProductDisplay = ({ Farge, Vinyltekst, Fontfarge, Font }) => {
    return (
        <div>
            <h3>Product Preview</h3>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: Farge,
                    color: Fontfarge,
                    fontFamily: Font,
                }}
            >
                {Vinyltekst}
            </div>
        </div>
    );
};

export default ProductDisplay;
