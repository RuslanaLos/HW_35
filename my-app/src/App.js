import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import './App.css';
import flowerData from './data/data';

const App = () => {
    const [selectedFlower, setSelectedFlower] = useState(null);

    const handleNavigationClick = (flower) => {
        setSelectedFlower(flower);
    };

    return (
        <div className="app">
            <Header />
            <div className="content-container">
                <Navigation onNavigationClick={handleNavigationClick} flowerData={flowerData} />
                <Container flower={selectedFlower} flowerData={flowerData} />
            </div>
        </div>
    );
};

export default App;
