import React from 'react';

// Define an object that maps color names to image URLs
const colorImages = {
    Svart: `${process.env.PUBLIC_URL}klips/svart.jpg`,
    Armygrønn: `${process.env.PUBLIC_URL}klips/armygrønn.jpg`,
    Fiolett: `${process.env.PUBLIC_URL}klips/fiolett.jpg`,
    Aquablå: `${process.env.PUBLIC_URL}klips/aquablå.jpg`,
    Hvit: `${process.env.PUBLIC_URL}klips/hvit.jpg`,
    Beige: `${process.env.PUBLIC_URL}klips/beige.jpg`,
};

const KlipsButtons = ({ onColorChange }) => {
    return (
        <div>
            <h3>Select Color</h3>
            {Object.entries(colorImages).map(([color, imageUrl]) => (
                <button
                    key={color}
                    onClick={() => onColorChange(color)}
                >
                    <img
                        src={imageUrl}
                        alt={color}
                        style={{ width: '100px', height: '100px' }} // Adjust the dimensions as needed
                    />
                </button>
            ))}
        </div>
    );
};

export default KlipsButtons;
