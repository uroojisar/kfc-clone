import React from 'react';
import './product.styles.scss';
import productimage from "../../assets/product.png";


const Product = () => {
    return (
        <div className="card">
            <img class="card-img-top" src={productimage} alt="Product image"/>
            <div className="card-body">
                <h5 className="card-title">CRISPY BOX</h5>
                <p className="card-text text">2 Pc Hot <span>&#38;</span> Crispy Chicken, 1 Regular Fries, 1 Regular Drink <span>&#38;</span> 1 Coleslaw.</p>
                <div className="container-fluid">
                <button type="button" className="btn btn-outline-danger w-100">PKR 520</button>
                <button type="button" className="btn btn-danger w-100">ADD TO BUCKET</button>
                </div>
            </div>
        </div>
        );
    }
    
    
export default Product;