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
                    harLengdemeter={true}
                    harLengdecm={false}
                    harBredde={false}
                    harKrokband={false}
                    harHandtak={true}
                    harKrok={true}
                    harTekst={true}
                    harKlips={false}
                    harRing={false}
                />
            </div>
        </div>
    );
};

export default Leieband;