import React from "react";
import ProductConfigurator from "components/Global/ProductConfigurator";
const Klipsband = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Halsbånd med klips</h1>
                <ProductConfigurator
                    navn={"halsbånd"}
                    produktpris={300}
                    prismeter={0}
                    harLengdemeter={false}
                    harLengdecm={true}
                    harBredde={true}
                    harKrokband={false}
                    harHandtak={false}
                    harKrok={false}
                    harTekst={true}
                    harKlips={true}
                    harRing={false}
                    harFarge2={false}
                    harLeke={false}
                />
            </div>
        </div>
    );
};

export default Klipsband;