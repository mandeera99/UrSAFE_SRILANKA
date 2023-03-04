import React from "react";
import { Fragment } from "react";

function Footer() {
    return (
        <Fragment>
            {/*         <!-- Footer Area -->
 */}        <footer className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3>Contact Info</h3>
                                <p>UrSAFE medicine search web application.</p>
                                <ul className="footer-contact-list">
                                    <li>
                                        <i className='flaticon-pin'></i>
                                        <div className="content">
                                            University of Ruhuna,Wellamadama,Matara
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-phone-call'></i>
                                        <div className="content">
                                            <a href="tel:+94 76 750 32 87" className="link-underlines">+94 76 750 32 87</a>
                                            <a href="tel:+94 76 750 32 87" className="link-underlines">+94 76 750 32 87</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='bx bxs-envelope'></i>
                                        <div className="content">
                                            <a href="mailto:hello@UrSAFE.com" className="link-underlines">hello@UrSAFE.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget">
                                <h3>Important Link</h3>
                                <ul className="footer-list">
                                    <li>
                                        <a href="/about" target="_blank" className="link-underlines">
                                            <i className='bx bxs-chevron-right'></i>
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/services" target="_blank" className="link-underlines"> 
                                            <i className='bx bxs-chevron-right'></i>
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/pharmacy" target="_blank" className="link-underlines">
                                            <i className='bx bxs-chevron-right'></i>
                                            Pharmacy
                                        </a>
                                    </li>

                                  
                                    <li>
                                        <a href="/contact" target="_blank" className="link-underlines">
                                            <i className='bx bxs-chevron-right'></i>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget ps-2">
                                <div className="footer-logo">
                                    <a href="#">
                                        <img src="assets/img/logo.png" className="footer-logo1" alt="Images" />
                                        <img src="assets/img/logo-2.png" className="footer-logo2" alt="Images" />
                                    </a>
                                </div>
                                <p>UrSAFE SL Web Application.</p>
                                <ul className="social-link">
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-pinterest-alt'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i className='bx bxl-youtube'></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <h3>Policies</h3>
                                <ul>
                                    <li>
                                        Privacy Policy
                                    </li>
                                    <li>
                                        Advertising Policy
                                    </li>
                                    <li>
                                        Terms of Use
                                    </li>

                                </ul>

                                <h3>For Advertisers</h3>
                                <ul>
                                    <li>
                                        Advertise with Us
                                    </li>
                                    <li>
                                        Advertising Policy
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
            {/*         <!-- Footer Area End -->
 */}


        </Fragment>
    )
}

export default Footer;