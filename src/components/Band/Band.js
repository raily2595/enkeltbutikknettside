import strings from 'strings.json';
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { NavLink } from "react-router-dom";
const Band = () => {
    return (
        <div>
            <div className="main-content">
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/leiebåndhvit.png`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/leiebånd.jpg`} alt="Nila" />
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
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/band/leieband">Leiebånd</NavLink>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/sporlinehvit.png`} alt="Nila" />
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
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/band/sporline">Sporline</NavLink>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/dobbeltkrokhvit.png`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/dobbelkrok.jpg`} alt="Nila" />
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
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/band/dobbeltkrok">Dobbeltkrok</NavLink>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefothvit.png`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefot.jpg`} alt="Nila" />
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
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/band/hanefot">Hanefot</NavLink>
                    </div>
                </div>
                {/*<div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefothvit.png`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefot.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefot1.jpg`} alt="Nila" />
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <div>
                            <h2>{strings.handtak}</h2>
                            <p>{strings.handtaktekst}</p>
                        </div>
                        <div>
                            <p>{strings.fargetekst}</p>
                            <p>{strings.lengdetekst}</p>
                        </div>
                        <div>
                            <p>{strings.prisinfohandtak}</p>
                        </div>
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/band/handtak">Håndtak</NavLink>
                    </div>
                </div>*/}
                {/*<div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefothvit.png`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefot.jpg`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/hanefot1.jpg`} alt="Nila" />
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <div>
                            <h2>{strings.handtakband}</h2>
                            <p>{strings.handtakbandtekst}</p>
                        </div>
                        <div>
                            <p>{strings.fargetekst}</p>
                            <p>{strings.lengdetekst}</p>
                        </div>
                        <div>
                            <p>{strings.prisinfohandtakband}</p>
                            <p>{strings.vinylinfo}</p>
                        </div>
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/band/handtakband">Håndtak med Sporline</NavLink>
                    </div>
                </div>*/}
            </div>
        </div>
    );
};

export default Band;
