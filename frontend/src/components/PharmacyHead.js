import React from "react";
import { Fragment } from "react";



function PharmacyHead() {
    return (
        <Fragment>

            {/*  <!-- Top Header Start -->  */}
            <header className="top-header top-header-bgp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="header-left">
                                <div className="header-left-card">
                                    <ul>
                                        <li>
                                            <div className="head-icon">
                                                <i className='bx bx-mail-send'></i>
                                            </div>
                                            <a href="mailto:nomashikarunadasa@gmail.com">hello@UrSAFE.com</a>
                                        </li>

                                        <li>
                                            <div className="head-icon">
                                                <i className='bx bx-time-five'></i>
                                            </div>
                                            <a href="#">Mon - Sun: 24/7</a>
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
        </Fragment>

    )
}

export default PharmacyHead;