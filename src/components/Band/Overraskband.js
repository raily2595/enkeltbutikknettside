import React from "react";
import ProductConfigurator from "../Global/ProductConfigurator";
const Overraskband = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Overraskelse Leiebånd</h1>
                <ProductConfigurator
                    navn={"overraskband"}
                    produktpris={150}
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
                    harLeke={false}
                    overrask={true}
                />
            </div>
        </div>
    );
};

export default Overraskband;