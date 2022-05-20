import React from 'react';
import './homepage.styles.scss';
import Navigation from '../../Components/navigation/navigation.component';
import CarouselComponent from '../../Components/carousel/carousel.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Navigation/>
            <CarouselComponent/>
        </div>
    );
}

export default HomePage;
