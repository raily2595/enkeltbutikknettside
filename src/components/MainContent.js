import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import strings from '../strings.json';

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
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" target="_blank" rel="noreferrer">Bestill</a>
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
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" target="_blank" rel="noreferrer">Bestill</a>
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
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" target="_blank" rel="noreferrer">Bestill</a>
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
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" target="_blank" rel="noreferrer">Bestill</a>
                    </div>
                </div>
                <div className="fargecard">
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
                        <h2>{strings.fargekart}</h2>
                        <p>{strings.fargekarttext}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
