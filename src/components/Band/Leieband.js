import React from "react";
import ProductConfigurator from "./ProductConfigurator";
const Leieband = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Leiebånd</h1>
                <ProductConfigurator
                    navn={"leiebånd"}
                    produktpris={200}
                    prismeter={50}
                    harLengdemeter={true}
                    harLengdecm={false}
                    harBredde={false}
                    harKrokband={false}
                    harHandtak={true}
                    harKrok={true}
                    harTekst={true}
                    harKlips={false}
                    harRing={false}
                    harFarge2={true}
                />
            </div>
        </div>
    );
};

export default Leieband;