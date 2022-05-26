import React from 'react';
import './carousel.styles.scss';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
        <div className='carousel-component'>
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <Carousel.Item>
                <img
                className="img-fluid w-100"
                src={require('../../assets/slide-1-kfc.png')} 
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item> 
                <img
                className="img-fluid w-100"
                src={require('../../assets/slide-2-kfc.jpg')} 
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img-fluid w-100"
                src={require('../../assets/slide-3-kfc.png')} 
                alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}


export default CarouselComponent;