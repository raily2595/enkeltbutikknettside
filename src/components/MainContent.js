import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import strings from '../strings.json';
import { NavLink } from 'react-router-dom'

const MainContent = () => {
    return (
        <main>
            <div className="main-content">
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/leieband1.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/leieband2.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.leieband}</h2>
                        <p>{strings.leiebandtekst1}{strings.fargetekst}{strings.lengdetekst}</p>
                        <p>{strings.leiebandtekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/halsband1.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/halsband2.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/halsband3.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/halsband4.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.halsband}</h2>
                        <p>{strings.halsbandtekst1}</p>
                        <p>{strings.halsbandtekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/sporline1.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/sporline2.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.sporline}</h2>
                        <p>{strings.sporlinetekst1}{strings.fargetekst}{strings.lengdetekst}</p>
                        <p>{strings.sporlinetekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/dobbelkrok1.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/dobbelkrok2.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.dobbeltkrok}</h2>
                        <p>{strings.dobbeltkroktekst1}{strings.fargetekst}{strings.lengdetekst}</p>
                        <p>{strings.dobbeltkroktekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}bilder/hanefot1.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.hanefot}</h2>
                        <p>{strings.hanefottekst1}{strings.fargetekst}{strings.lengdetekst}</p>
                        <p>{strings.hanefottekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                    </div>
                    <div className="card-content">
                        <h2>{strings.info}</h2>
                        <p>{strings.infotekst}</p>
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
        </main>
    );
};

export default MainContent;
