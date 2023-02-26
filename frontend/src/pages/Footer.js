import React from "react";
import { Fragment } from "react";

function Footer() {
    return (
        <Fragment>
            {/*         <!-- Footer Area -->
 */}        <footer class="footer-area pt-100 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-widget">
                                <h3>Contact Info</h3>
                                <p>UrSAFE medicine search web application.</p>
                                <ul class="footer-contact-list">
                                    <li>
                                        <i class='flaticon-pin'></i>
                                        <div class="content">
                                            University of Ruhuna,Wellamadama,Matara
                                        </div>
                                    </li>
                                    <li>
                                        <i class='flaticon-phone-call'></i>
                                        <div class="content">
                                            <a href="tel:+94 76 750 32 87">+94 76 750 32 87</a>
                                            <a href="tel:+94 76 750 32 87">+94 76 750 32 87</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class='bx bxs-envelope'></i>
                                        <div class="content">
                                            <a href="mailto:hello@UrSAFE.com">hello@UrSAFE.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-6">
                            <div class="footer-widget">
                                <h3>Important Link</h3>
                                <ul class="footer-list">
                                    <li>
                                        <a href="/about" target="_blank">
                                            <i class='bx bxs-chevron-right'></i>
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/services" target="_blank">
                                            <i class='bx bxs-chevron-right'></i>
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/pharmacy" target="_blank">
                                            <i class='bx bxs-chevron-right'></i>
                                            Pharmacy
                                        </a>
                                    </li>

                                  
                                    <li>
                                        <a href="/contact" target="_blank">
                                            <i class='bx bxs-chevron-right'></i>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-widget ps-2">
                                <div class="footer-logo">
                                    <a href="#">
                                        <img src="assets/img/logo.png" class="footer-logo1" alt="Images" />
                                        <img src="assets/img/logo-2.png" class="footer-logo2" alt="Images" />
                                    </a>
                                </div>
                                <p>UrSAFE SL Web Application.</p>
                                <ul class="social-link">
                                    <li>
                                        <a href="#" target="_blank"><i class='bx bxl-facebook'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i class='bx bxl-twitter'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i class='bx bxl-instagram'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i class='bx bxl-pinterest-alt'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><i class='bx bxl-youtube'></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-widget">
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