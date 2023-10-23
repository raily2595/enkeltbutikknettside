import strings from '../../strings.json';
import React from "react";
import {Carousel} from "react-responsive-carousel";
const Leke = () => {
    return (
        <div>
            <div className="main-content">
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/leke.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/leke1.jpg`} alt="Nila" />
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <div>
                            <h2>{strings.leke}</h2>
                            <p>{strings.leketekst}</p>
                        </div>
                        <div>
                            <p>{strings.fargetekst}</p>
                            <p>{strings.lengdetekst}</p>
                        </div>
                        <div>
                            <p>{strings.prisinfoleke}</p>
                        </div>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/leke.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/leke1.jpg`} alt="Nila" />
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <div>
                            <h2>{strings.lekeuten}</h2>
                            <p>{strings.leketekst}</p>
                        </div>
                        <div>
                            <p>{strings.fargetekst}</p>
                            <p>{strings.lengdetekst}</p>
                        </div>
                        <div>
                            <p>{strings.prisinfolekeuten}</p>
                        </div>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leke;
