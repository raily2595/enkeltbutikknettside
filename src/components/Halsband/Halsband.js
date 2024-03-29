import strings from 'strings.json';
import { Carousel } from "react-responsive-carousel";
import React from "react";
import {NavLink} from "react-router-dom";
const Halsband = () => {
    return (
        <div>
            <div className="main-content">
                <div className="card">
                    <div className="carousel-container">
                        <Carousel>
                            <img src={`${process.env.PUBLIC_URL}bilder/halsbåndhvit.png`} alt="Nila" />
                            <img src={`${process.env.PUBLIC_URL}bilder/halsbånd.jpg`} alt="Nila" />
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
                            <p>{strings.lengdetekst}</p>
                        </div>
                        <div>
                            <p>{strings.prisinfohalsband}</p>
                            <p>{strings.vinylinfo}</p>
                        </div>
                        <NavLink
                            className="card-button"
                            activeclassname="nav-link-active"
                            exact="true"
                            to="/halsband/klipsband">Halsbånd</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Halsband;
