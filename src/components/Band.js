import strings from '../strings.json';
import {Carousel} from "react-responsive-carousel";
import React from "react";
import {NavLink} from "react-router-dom";
const Band = () => {
    return (
        <band>
            <div className="band-content">
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/leieband1.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/leieband2.jpg`} alt="Nila" />
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <div>
                            <h2>{strings.leieband}</h2>
                            <p>{strings.leiebandtekst}</p>
                        </div>
                        <div>
                            <p>{strings.fargetekst}</p>
                            <p>{strings.lengdetekst}</p>
                        </div>
                        <div>
                            <p>{strings.prisinfoband}</p>
                            <p>{strings.vinylinfo}</p>
                        </div>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
            <div className="card">
                <div className="carousel-container">
                    <Carousel>
                        <img src={`${process.env.PUBLIC_URL}bilder/sporline1.jpg`} alt="Nila" />
                        <img src={`${process.env.PUBLIC_URL}bilder/sporline2.jpg`} alt="Nila" />
                    </Carousel>
                </div>
                <div className="card-content">
                    <div>
                        <h2>{strings.sporline}</h2>
                        <p>{strings.sporlinetekst}</p>
                    </div>
                    <div>
                        <p>{strings.fargetekst}</p>
                        <p>{strings.lengdetekst}</p>
                    </div>
                    <div>
                        <p>{strings.prisinfoband}</p>
                        <p>{strings.vinylinfo}</p>
                    </div>
                    <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                </div>
            </div>
            <div className="card">
                <div className="carousel-container">
                    <Carousel>
                        <img src={`${process.env.PUBLIC_URL}bilder/dobbelkrok1.jpg`} alt="Nila" />
                        <img src={`${process.env.PUBLIC_URL}bilder/dobbelkrok2.jpg`} alt="Nila" />
                    </Carousel>
                </div>
                <div className="card-content">
                    <div>
                        <h2>{strings.dobbeltkrok}</h2>
                        <p>{strings.dobbeltkroktekst}</p>
                    </div>
                    <div>
                        <p>{strings.fargetekst}</p>
                        <p>{strings.lengdetekst}</p>
                    </div>
                    <div>
                        <p>{strings.prisinfoband}</p>
                        <p>{strings.vinylinfo}</p>
                    </div>
                    <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                </div>
            </div>
            <div className="card">
                <div className="carousel-container">
                    <Carousel>
                        <img src={`${process.env.PUBLIC_URL}bilder/hanefot1.jpg`} alt="Nila" />
                    </Carousel>
                </div>
                <div className="card-content">
                    <div>
                        <h2>{strings.hanefot}</h2>
                        <p>{strings.hanefottekst}</p>
                    </div>
                    <div>
                        <p>{strings.fargetekst}</p>
                        <p>{strings.lengdetekst}</p>
                    </div>
                    <div>
                        <p>{strings.prisinfohanefot}</p>
                        <p>{strings.vinylinfo}</p>
                    </div>
                    <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                </div>
            </div>
            <div className="card">
                <div className="card-lone-content">
                    <div>
                        <h2>{strings.info}</h2>
                        <p>{strings.infotext1}</p>
                        <p>{strings.infotext2}</p>
                        <p>{strings.infotext3}</p>
                        <p>{strings.infotext4}</p>
                    </div>
                    <NavLink
                        className="card-button"
                        activeclassname="nav-link-active"
                        exact="true"
                        to="/fargekart">Fargekart</NavLink>
                    <NavLink
                        className="card-button"
                        activeclassname="nav-link-active"
                        exact="true"
                        to="/font">Font</NavLink>
                </div>
            </div>
            </div>
        </band>
    );
};

export default Band;
