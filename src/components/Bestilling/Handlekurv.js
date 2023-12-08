import React, {useEffect, useState} from "react";

const Handlekurv = () => {
    const [handlekurvItems, setHandlekurvItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('productConfigurations')) || [];
        setHandlekurvItems(storedCart);
    }, []);

    const removeFromCart = (index) => {
        // Fjern elementet fra handlekurven basert på index
        console.log(index);
        console.log(handlekurvItems.length);
        const updatedHandlekurv = [...handlekurvItems.slice(0, index), ...handlekurvItems.slice(index + 1)];
        console.log(updatedHandlekurv.length);
        setHandlekurvItems(updatedHandlekurv);

        // Oppdater localStorage med den oppdaterte handlekurven
        localStorage.setItem('productConfigurations', JSON.stringify(updatedHandlekurv));
    };

    const clearCart = () => {
        // Tøm hele handlekurven
        setHandlekurvItems([]);

        // Oppdater localStorage med en tom handlekurv
        localStorage.removeItem('productConfigurations');
    };

    return (
        <div>
            <h2>Handlekurv</h2>
            {handlekurvItems.length === 0 ? (
                <p>Handlekurven er tom</p>
            ) : (
                <div>
                    <ul>
                        {handlekurvItems.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <strong>{item.produktnavn}</strong> - <button onClick={() => removeFromCart(index)}>Fjern</button>
                                </div>
                                <div>
                                    Lengde: {item.lengde} Bredde: {item.bredde}
                                </div>
                                <div>Valgt farge: {item.farge}</div>
                                {item.onskerFarge2 && (
                                    <div>Valgt farge2: {item.farge2}</div>
                                )}
                                {item.onskerTekst && (
                                    <>
                                        <div>Text: {item.vinyltekst} Text Color: {item.fontfarge} Font: {item.font}</div>
                                    </>
                                )}
                                <div>Pris: {item.pris}</div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart}>Tøm handlekurv</button>
                </div>
            )}
        </div>
    );
};

export default Handlekurv;