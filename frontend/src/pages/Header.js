import React from "react";
import { Fragment } from "react";



function Header() {
    return (
        <Fragment>
           
            {/*  <!-- Top Header Start -->  */}
            <header className="top-header top-header-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="header-left">
                                <div className="header-left-card">
                                    <ul>
                                        <li>
                                            <div class="head-icon">
                                                <i class='bx bx-mail-send'></i>
                                            </div>
                                            <a href="mailto:nomashikarunadasa@gmail.com" className="link-underlines">hello@UrSAFE.com</a>
                                        </li>

                                        <li>
                                            <div className="head-icon">
                                                <i className='bx bx-time-five'></i>
                                            </div>
                                            <a href="#" className="link-underlines">Mon - Sun: 24/7</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="header-right">
                                <div className="top-social-link">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-youtube'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-google-plus'></i>
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
            <div className="navbar-area">
                {/* <!-- Menu For Mobile Device --> */}
                <div className="mobile-nav">
                    <a href="index.html" className="logo">
                        <img src="assets/img/logo ursafe-bg.png" className="logo-one" alt="Logo" width="100%" height="100%" />

                    </a>
                </div>

                {/*    <!-- Menu For Desktop Device --> */}
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light ">
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" className="logo-one" alt="Logo" width="110px" height="80px" />
                                <img src="assets/img/logo.png" className="logo-two" alt="Logo" width="110px" height="80px" />
                            </a>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <a href="/" className="nav-link active">
                                            Home

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/about" className="nav-link">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Pages
                                            <i className='bx bx-chevron-down'></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="/fAQ" className="nav-link">
                                                    FAQ
                                                </a>
                                            </li>

                                           
                                            <li className="nav-item">
                                                <a href="/signIn" className="nav-link">
                                                    Sign In
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/signUp" className="nav-link">
                                                    Sign Up
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/condition" className="nav-link">
                                                    Terms & Conditions
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/privacy" className="nav-link">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                          
                                            <li className="nav-item">
                                                <a href="/upcoming" className="nav-link">
                                                    Up coming details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="/medicine" className="nav-link">
                                            Medicine
                                        </a>
                                       
                                    </li>

                                    <li className="nav-item">
                                        <a href="/services" className="nav-link">
                                            Services
                                        </a>
                                     
                                    </li>

                                    <li className="nav-item">
                                        <a href="/blog" class="nav-link">
                                            Blog
                                        </a>
                                   
                                    </li>



                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>

                                <div className="others-options d-flex align-items-center">
                                    <div className="buttons">
                                        <a href="/signIn" className="btn btn-dark">
                                            <i className=""></i>sign in</a>
                                        <a href="/signUp" className="btn btn-dark ms-2">
                                            <i className=""></i>sign up</a>
                                    </div>

                                    <div className="option-item">
                                        <div className="add-cart-btn">
                                            <a href="/cart" className="cart-btn-icon">
                                                <i className='bx bx-shopping-bag ms-2'></i>
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
                                <div className="circle circle-one"></div>
                                <div className="circle circle-two"></div>
                                <div className="circle circle-three"></div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="side-nav-inner">
                                <div className="side-nav justify-content-center align-items-center">
                                    <div className="side-item">


                                        <div className="option-item">
                                            <div className="add-cart-btn">
                                                <a href="/cart" className="cart-btn-icon">
                                                    <i className='bx bx-shopping-bag'></i>
                                                    <span>0</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="option-item">
                                            <div className="buttons">
                                                <a href="/signIn" className="btn btn-dark">
                                                    <i className=""></i>sign in</a>
                                                <a href="/user/signUp" className="btn btn-dark ms-2">
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