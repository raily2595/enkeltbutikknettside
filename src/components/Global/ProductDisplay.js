import React from "react";
import mapColorToHex from '../../Colors';

const ProductDisplay = ({ farge, vinyltekst, fontfarge, font }) => {
    return (
        <div
            style={{
                backgroundColor: mapColorToHex(farge),
                color: mapColorToHex(fontfarge),
                fontFamily: font,
                fontSize: "56px",
                padding: "12px",
                margin: "12px"
            }}>
            <div>
                {vinyltekst}
            </div>
        </div>
    );
};

export default ProductDisplay;
