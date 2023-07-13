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
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.leieband}</h2>
                        <p>{strings.leiebandtekst1}</p>
                        <p>{strings.leiebandtekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
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
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.sporline}</h2>
                        <p>{strings.sporlinetekst1}</p>
                        <p>{strings.sporlinetekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.dobbeltkrok}</h2>
                        <p>{strings.dobbeltkroktekst1}</p>
                        <p>{strings.dobbeltkroktekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}nila.jpg`} alt="Nila" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.hanefot}</h2>
                        <p>{strings.hanefottekst1}</p>
                        <p>{strings.hanefottekst2}</p>
                        <p>{strings.vinylinfo}</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" className="card-button" target="_blank" rel="noreferrer">{strings.bestillknapp}</a>
                    </div>
                </div>
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Blue521.jpg`} alt="Lysblå" />
                            </div>
                            <div>
                               <img src={`${process.env.PUBLIC_URL}fargekart/Brown522.jpg`} alt="Rødbrun" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Coral521.jpg`} alt="Korall" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Gold-leaf522.jpg`} alt="Beige" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Green52K.jpg`} alt="Karibigrønn" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Green525.jpg`} alt="Eplegrønn" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Lagune52F.jpg`} alt="Laguneblå" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Orange529.jpg`} alt="Ferskenorange" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Pink521.jpg`} alt="Neonrosa" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Purple524.jpg`} alt="Ametyst" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Red522.jpg`} alt="Rød" />
                            </div>
                            <div>
                                <img src={`${process.env.PUBLIC_URL}fargekart/Wine521.jpg`} alt="Vinrød" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="card-content">
                        <h2>{strings.fargekart}</h2>
                        <p>{strings.fargekarttext}</p>
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
