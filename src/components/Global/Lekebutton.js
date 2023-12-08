import React from 'react';

const Lekebutton = ({ image, type, pris, onSelect, selected, diameter }) => {
    return (
        <button onClick={() => onSelect(type, pris)} className={selected ? 'selected' : ''}>
            <img src={image} alt="Product" />
            <p>{`Type: ${type}, Diameter: ${diameter}, Pris: ${pris} kr`}</p>
        </button>
    );
};

export default Lekebutton;