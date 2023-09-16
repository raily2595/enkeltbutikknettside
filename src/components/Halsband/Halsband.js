import strings from '../../strings.json';
import {Carousel} from "react-responsive-carousel";
import React from "react";
import {NavLink} from "react-router-dom";
const Halsband = () => {
    return (
        <div>
            <div className="halsband-content">
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/halsband1.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/halsband2.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/halsband3.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/halsband4.jpg`} alt="Nila" />
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <div>
                            <h2>{strings.halsband}</h2>
                            <p>{strings.halsbandtekst}</p>
                        </div>
                        <div>
                            <p>{strings.fargetekst}</p>
                            <p>{strings.lengdetekst}</p>
                        </div>
                        <div>
                            <p>{strings.prisinfohalsband}</p>
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
        </div>
    );
};

export default Halsband;
