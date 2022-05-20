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
                src={require('../../assets/slide3.jpg')} 
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item> 
                <img
                className="img-fluid w-100"
                src={require('../../assets/slide2.jpg')} 
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img-fluid w-100"
                src={require('../../assets/slide3.jpg')} 
                alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}


export default CarouselComponent;