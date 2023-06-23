import React from 'react';
import { Carousel } from 'react-responsive-carousel';

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
                        <h2>Leiebånd med håndtak og krok</h2>
                        <p>Kan fåes enfarget eller tofarget. Lengden velges selv. Vinyltrykk er inkludert i prisen. </p>
                        <p>Pris: 200kr + 50kr per meter</p>
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
                        <h2>Sporline med krok </h2>
                        <p>Kan fåes enfarget eller tofarget. Lengden velges selv. Vinyltrykk er inkludert i prisen. </p>
                        <p>Pris: 200kr + 50kr per meter</p>
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
                        <h2>Dobbeltkrok</h2>
                        <p>Kan fåes enfarget eller tofarget. Lengden velges selv. Vinyltrykk er inkludert i prisen. </p>
                        <p>Pris: 200kr + 50kr per meter</p>
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
                        <h2>Hanefot </h2>
                        <p>Kan fåes enfarget eller tofarget. Lengden velges selv. Vinyltrykk er inkludert i prisen. </p>
                        <p>Pris: 200kr + 50kr per meter</p>
                        <a href="https://forms.gle/kY8AKAE7vqwSmW2u5" target="_blank" rel="noreferrer">Bestill</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
