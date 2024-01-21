import React from "react";
import ProductConfigurator from "components/Global/ProductConfigurator";
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
                    harLeke={false}
                />
            </div>
        </div>
    );
};

export default Hanefot;