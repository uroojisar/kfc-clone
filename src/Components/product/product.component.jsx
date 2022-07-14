import React from 'react';
import './product.styles.scss';
import productimage from "../../assets/product.png";
import { Link, useNavigate } from 'react-router-dom';


const Product = ({id, title, description, price, img_url}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // navigate programmatically
        navigate('/product', {state : {id, title, description, price, img_url}});
    }

    return (
        <div className="card" onClick={handleClick}>
            <img class="card-img-top" src={productimage} alt="Product image"/>
                {/* TODO: Produt image should be taken from state variable img_url */}
            {/* <img class="card-img-top" src={require(`${img_url}`)} alt="Product image"/> */}
            <div className="card-body">
            <Link className="card-title" to="/">{title}</Link>
                <p className="card-text text">{description}</p>
                <div className="container-fluid">
                <button type="button" className="btn btn-outline-danger w-100">{price}</button>
                <button type="button" className="btn btn-danger w-100">ADD TO BUCKET</button>
                </div>
            </div>
        </div>
        );
    }
    

export default Product;