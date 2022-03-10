import React from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="menu-buttons-container">
            <Link className="menu-button" to="/">EVERYDAY VALUE</Link>
            <Link className="menu-button" to="/">MAKE IT A MEAL</Link>
            <Link className="menu-button" to="/">SIGNATURE BOXES</Link>
            <Link className="menu-button" to="/">SHARING</Link>
            <Link className="menu-button" to="/">PROMOTIONS</Link>
            <Link className="menu-button" to="/">SNACKS</Link>
            <Link className="menu-button" to="/">MIDNIGHT DEALS</Link>
        </div>
        <div className="cart-container">
            <div className="cart">
            <span className="item-count">0</span>
            </div>
        </div>
        </div>
    );
}

export default NavBar;