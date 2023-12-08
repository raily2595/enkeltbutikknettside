import React from "react";
import ProductConfigurator from "../Global/ProductConfigurator";
const Hanefot = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Hanefot</h1>
                <ProductConfigurator
                    navn={"hanefot"}
                    produktpris={200}
                    prismeter={50}
                    harLengdemeter={true}
                    harLengdecm={false}
                    harBredde={false}
                    harKrokband={true}
                    harHandtak={false}
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

export default Hanefot;