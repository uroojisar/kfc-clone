import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from "../../assets/kfc-logo.svg";

// Reference: https://github.com/react-icons/react-icons
// Installation: npm install react-icons --save
// import { IconName } from "react-icons/{font name}";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

// To add styles for react-icons version 3+
import { IconContext } from "react-icons";

const Header = () => (
    <div className='container'>
       <div className="row">
            <div className="col-sm-1">
                <Link to="/">
                <img src={logo} class="img-thumbnail" alt="Logo"/>
                </Link>
            </div>
            
            <div className="col-sm-4">
            {/* IconContext is used to style font awesome icons in react */}
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <Link className="option" to="/locations"><FaMapMarkerAlt />STORE LOCATOR</Link>
                    <Link className="option" to="/signin"><FaUser />SIGNIN / REGISTER</Link>
                </IconContext.Provider>
            </div>
        </div>
     </div>
);

export default Header;