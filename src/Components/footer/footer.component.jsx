import React from 'react';
import './footer.styles.scss';
import footerlogo from "../../assets/footer-logo.png";

const Footer = () => {
    return (
        <>
        <hr/>
        <div className='container'>
            <div className="text-center m-5">
                <img src={footerlogo} class="rounded" alt="Footer Logo"/>
            </div>
            <div className="row">
                <div className="col bold">
                    Information
                </div>
                <div className="col bold">
                    Food
                </div>
                <div className="col bold">
                    Locations
                </div>
                <div className="col bold">
                    Get in Touch
                </div>
                <div className="col">
                    Download Apps
                </div>
            </div>

            <div className="row">
                <div className="col link-text">
                About Us
                </div>
                <div className="col link-text">
                Our Secret Recipe
                </div>
                <div className="col link-text">
                Find a Store
                </div>
                <div className="col link-text">
                Contact
                </div>
                <div className="col">
                
                </div>
            </div>

            <div className="row">
                <div className="col link-text">
                Mitao Bhook
                </div>
                <div className="col">
                
                </div>
                <div className="col">
               
                </div>
                <div className="col link-text">
                Join Us
                </div>
                <div className="col">
                Download Apps
                </div>
            </div>

            <div className="row">
                <div className="col link-text">
                Privacy Policy
                </div>
                <div className="col">
                
                </div>
                <div className="col">
               
                </div>
                <div className="col link-text">
                Terms Conditions
                </div>
                <div className="col">

                </div>
            </div> 

            <div className="row">
                <div className="col bold">
                Careers
                </div>
                <div className="col">
                
                </div>
                <div className="col">
               
                </div>
                <div className="col">
                
                </div>
                <div className="col">
                
                </div>
            </div>
            <p className="text-center small">© 2022 KFC Pakistan. All rights reserved.</p>
        </div>
        </>
        );
    }
    
    
export default Footer;