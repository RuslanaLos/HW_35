import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavigationClick, flowerData }) => {
    return (
        <div className="navigation">
            <ul>
                {flowerData.map((flower) => (
                    <li key={flower.name}><a href="#" onClick={() => onNavigationClick(flower.name)}>{flower.name}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;