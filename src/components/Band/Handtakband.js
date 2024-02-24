import React from "react";
import ProductConfigurator from "components/Global/ProductConfigurator";
const Handtakband = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Håndtak og sporline</h1>
                <ProductConfigurator
                    navn={"handtakband"}
                    produktpris={400}
                    prismeter={0}
                    harLengdemeter={false}
                    harLengdecm={false}
                    harBredde={false}
                    harKrokband={true}
                    harHandtak={true}
                    harKrok={true}
                    harTekst={false}
                    harKlips={false}
                    harRing={true}
                    harFarge2={true}
                    harLeke={false}
                />
            </div>
        </div>
    );
};

export default Handtakband;