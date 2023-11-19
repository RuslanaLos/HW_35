import React from 'react';
import './Container.css';

const Container = ({ flower, flowerData }) => {
    const selectedFlower = flowerData.find((item) => item.name === flower);

    return (
        <div className="container">
            {selectedFlower ? (
                <>
                    <h2>{selectedFlower.name}</h2>
                    <p>{selectedFlower.description}</p>
                </>
            ) : (
                <p>Please select a flower from the column on the left.</p>
            )}
        </div>
    );
};

export default Container;