import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/kfc-logo.svg';

// Reference: https://github.com/react-icons/react-icons
// Installation: npm install react-icons --save
// import { IconName } from "react-icons/{font name}";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
// import { IoIosPin } from "react-icons/io";

// To add styles for react-icons version 3+
import { IconContext } from "react-icons";

const Header = () => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <Link className="option" to="/locations" style={{paddingRight: 25}}><FaMapMarkerAlt />STORE LOCATOR</Link>
            <Link className="option" to="/signin"><FaUser />SIGNIN / REGISTER</Link>
        </IconContext.Provider>
        </div>
    </div>
);

export default Header;