import React from "react";
import ProductConfigurator from "../Global/ProductConfigurator";
const Sporline = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Sporline</h1>
                <ProductConfigurator
                    navn={"sporline"}
                    produktpris={200}
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
                    harLeke={false}
                />
            </div>
        </div>
    );
};

export default Sporline;