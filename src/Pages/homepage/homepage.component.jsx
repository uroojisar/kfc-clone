import React from 'react';
import './homepage.styles.scss';
import Navigation from '../../Components/navigation/navigation.component';
import CarouselComponent from '../../Components/carousel/carousel.component';
import Product from '../../Components/product/product.component';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectSignatureBoxItems } from '../../redux/products/product.selectors';


const HomePage = ({products}) => {
    return (
        <div className="homepage">
            <CarouselComponent/>
            <div className="container-fluid product-panel">
                {products.filter((product, idx) => idx < 4)
                    .map(({id, ...otherProductProps}) => 
                    <Product key={id} id={id} {...otherProductProps}/>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    products: selectSignatureBoxItems
});

export default connect(mapStateToProps, null)(HomePage);
