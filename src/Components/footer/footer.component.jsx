import React from 'react';
import './footer.styles.scss';
import footerlogo from "../../assets/footer-logo.png";
import appstore from "../../assets/app-store.png";
import googleplay from "../../assets/google-play.png";

const Footer = () => {
    return (
        <>
        <hr/>
        <div className='container'>
            <div className="text-center m-5">
                <img src={footerlogo} class="rounded" alt="Footer Logo"/>
            </div>
            <div className="row">
                <div className="col-10">
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
                        Terms <span>&#38;</span> Conditions
                        </div>
                    </div> 

                    <div className="row">
                        <div className="col bold">
                        Careers
                        </div>
                    </div>    
                </div>
                <div className="col-2">
                    <img src={appstore} class="img-fluid download-app" alt="Download from App Store"/>
                    <img src={googleplay} class="img-fluid download-app" alt="Download from Google Play Store"/>
                </div>
            </div>
            <p className="text-center small">© 2022 KFC Pakistan. All rights reserved.</p>
        </div>
        </>
        );
    }
    
    
export default Footer;