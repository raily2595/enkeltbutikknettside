import React from "react";
import ProductConfigurator from "../Global/ProductConfigurator";
const Lekemed = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Håndtak og leke</h1>
                <ProductConfigurator
                    navn={"lekemed"}
                    produktpris={100}
                    prismeter={50}
                    harLengdemeter={true}
                    harLengdecm={false}
                    harBredde={false}
                    harKrokband={false}
                    harHandtak={false}
                    harKrok={true}
                    harTekst={true}
                    harKlips={false}
                    harRing={false}
                    harFarge2={true}
                    harLeke={true}
                    overrask={false}
                />
            </div>
        </div>
    );
};

export default Lekemed;