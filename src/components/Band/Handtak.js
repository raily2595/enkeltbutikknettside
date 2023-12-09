import React from "react";
import ProductConfigurator from "../Global/ProductConfigurator";
const Handtak = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Håndtak</h1>
                <ProductConfigurator
                    navn={"handtak"}
                    produktpris={200}
                    prismeter={0}
                    harLengdemeter={false}
                    harLengdecm={false}
                    harBredde={false}
                    harKrokband={true}
                    harHandtak={true}
                    harKrok={true}
                    harTekst={false}
                    harKlips={false}
                    harRing={false}
                    harFarge2={false}
                    harLeke={false}
                    overrask={false}
                />
            </div>
        </div>
    );
};

export default Handtak;