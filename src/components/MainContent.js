import React from 'react';
import {Carousel} from "react-responsive-carousel";

const MainContent = () => {
    return (
        <main>
            <div className="main-content">
                <div className="carousel-container">
                    <Carousel>
                        <img src={`${process.env.PUBLIC_URL}bilder/leieband1.jpg`} alt="Nila" />
                        <img src={`${process.env.PUBLIC_URL}bilder/halsband1.jpg`} alt="Nila" />
                    </Carousel>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
