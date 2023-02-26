import React from "react";
import { Fragment } from "react";



function Header() {
    return (
        <Fragment>
           
            {/*  <!-- Top Header Start -->  */}
            <header class="top-header top-header-bg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8 col-md-8">
                            <div class="header-left">
                                <div class="header-left-card">
                                    <ul>
                                        <li>
                                            <div class="head-icon">
                                                <i class='bx bx-mail-send'></i>
                                            </div>
                                            <a href="mailto:nomashikarunadasa@gmail.com">hello@UrSAFE.com</a>
                                        </li>

                                        <li>
                                            <div class="head-icon">
                                                <i class='bx bx-time-five'></i>
                                            </div>
                                            <a href="#">Mon - Sun: 24/7</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <div class="header-right">
                                <div class="top-social-link">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class='bx bxl-youtube'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class='bx bxl-google-plus'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Top Header End -->

        <!-- Start Navbar Area --> */}
            <div class="navbar-area">
                {/* <!-- Menu For Mobile Device --> */}
                <div class="mobile-nav">
                    <a href="index.html" class="logo">
                        <img src="assets/img/logo ursafe-bg.png" class="logo-one" alt="Logo" width="100%" height="100%" />

                    </a>
                </div>

                {/*    <!-- Menu For Desktop Device --> */}
                <div class="main-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light ">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" class="logo-one" alt="Logo" width="110px" height="80px" />
                                <img src="assets/img/logo.png" class="logo-two" alt="Logo" width="110px" height="80px" />
                            </a>

                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item">
                                        <a href="/" class="nav-link active">
                                            Home

                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/about" class="nav-link">
                                            About
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Pages
                                            <i class='bx bx-chevron-down'></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="/fAQ" class="nav-link">
                                                    FAQ
                                                </a>
                                            </li>

                                           
                                            <li class="nav-item">
                                                <a href="/signIn" class="nav-link">
                                                    Sign In
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/signUp" class="nav-link">
                                                    Sign Up
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/condition" class="nav-link">
                                                    Terms & Conditions
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/privacy" class="nav-link">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                          
                                            <li class="nav-item">
                                                <a href="/upcoming" class="nav-link">
                                                    Up coming details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="/medicine" class="nav-link">
                                            Medicine
                                        </a>
                                       
                                    </li>

                                    <li class="nav-item">
                                        <a href="/services" class="nav-link">
                                            Services
                                        </a>
                                     
                                    </li>

                                    <li class="nav-item">
                                        <a href="/blog" class="nav-link">
                                            Blog
                                        </a>
                                   
                                    </li>



                                    <li class="nav-item">
                                        <a href="contact.html" class="nav-link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>

                                <div class="others-options d-flex align-items-center">
                                    <div className="buttons">
                                        <a href="/signIn" className="btn btn-dark">
                                            <i className=""></i>sign in</a>
                                        <a href="/signUp" className="btn btn-dark ms-2">
                                            <i className=""></i>sign up</a>
                                    </div>

                                    <div class="option-item">
                                        <div class="add-cart-btn">
                                            <a href="/cart" class="cart-btn-icon">
                                                <i class='bx bx-shopping-bag ms-2'></i>
                                                <span>0</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="side-nav-responsive">
                    <div className="container">
                        <div className="dot-menu">
                            <div className="circle-inner">
                                <div class="circle circle-one"></div>
                                <div class="circle circle-two"></div>
                                <div class="circle circle-three"></div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="side-nav-inner">
                                <div className="side-nav justify-content-center align-items-center">
                                    <div className="side-item">


                                        <div class="option-item">
                                            <div class="add-cart-btn">
                                                <a href="/cart" class="cart-btn-icon">
                                                    <i class='bx bx-shopping-bag'></i>
                                                    <span>0</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="option-item">
                                            <div className="buttons">
                                                <a href="/signIn" className="btn btn-dark">
                                                    <i className=""></i>sign in</a>
                                                <a href="/signUp" className="btn btn-dark ms-2">
                                                    <i className=""></i>sign up</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/*    <!-- End Navbar Area -->*/}
        </Fragment>
    )
}

export default Header;