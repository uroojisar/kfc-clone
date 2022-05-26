import React from 'react';
import './homepage.styles.scss';
import Navigation from '../../Components/navigation/navigation.component';
import CarouselComponent from '../../Components/carousel/carousel.component';
import Product from '../../Components/product/product.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Navigation/>
            <CarouselComponent/>
            <div className="container-fluid product-panel">
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    );
}

export default HomePage;
