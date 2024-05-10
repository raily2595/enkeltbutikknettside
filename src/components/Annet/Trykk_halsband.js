import React from "react";
import ProductConfigurator from "components/Global/ProductConfigurator";
const TrykkHalsband = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Halsbånd med trykk</h1>
                <ProductConfigurator
                    navn={"Trykk_halsband"}
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

export default TrykkHalsband;