import React from "react";
import ProductConfigurator from "../Global/ProductConfigurator";
const Overraskhalsband = () => {
    return (
        <div className="main-content">
            <div>
                <h1>Overraskelse Halsband</h1>
                <ProductConfigurator
                    navn={"overraskhalsband"}
                    produktpris={250}
                    prismeter={0}
                    harLengdemeter={false}
                    harLengdecm={true}
                    harBredde={true}
                    harKrokband={false}
                    harHandtak={false}
                    harKrok={false}
                    harTekst={true}
                    harKlips={false}
                    harRing={false}
                    harFarge2={false}
                    harLeke={false}
                    overrask={true}
                />
            </div>
        </div>
    );
};

export default Overraskhalsband;