import React from "react";
import ProductConfigurator from "components/Global/ProductConfigurator";
const ParacordHalsband = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Paracord Halsbånd</h1>
                <ProductConfigurator
                    navn={"Paracord_halsband"}
                    produktpris={400}
                    prismeter={0}
                    harLengdemeter={false}
                    harLengdecm={true}
                    harBredde={false}
                    harKrokband={false}
                    harHandtak={false}
                    harKrok={false}
                    harTekst={false}
                    harKlips={true}
                    harRing={false}
                    harFarge2={false}
                    harLeke={false}
                />
            </div>
        </div>
    );
};

export default ParacordHalsband;