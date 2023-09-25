import React from "react";
import ProductConfigurator from "./ProductConfigurator";
const Leieband = () => {
    return (
        <div>
            <div className="leieband-content">
                <h1>Leieband</h1>
                <ProductConfigurator
                    navn={"leiebånd"}
                    produktpris={200}
                />
            </div>
        </div>
    );
};

export default Leieband;