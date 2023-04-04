import React from "react";
import { Fragment } from "react";
import Header from "./Header";

const Services= (props) => {
        return (
            <Fragment><Header/>
                <div>


                    {/* <!-- Inner Banner --> */}
        <div className="inner-banner inner-bg7">
            <div className="container">
                <div className="inner-title">
                    <h3> Services</h3>
                    <ul>
                        <li>
                            <a href="/" className="link-underlines">Home</a>
                        </li>
                        <li> Services </li>
                    </ul>
                </div>
            </div>
            <div className="inner-banner-shape">
                <div className="shape1">
                    <img src="assets/img/inner-banner/inner-banner-shape1.png" alt="Images"/>
                </div>
                <div className="shape2">
                    <img src="assets/img/inner-banner/inner-banner-shape2.png" alt="Images"/>
                </div>
            </div>
        </div>
      {/*   <!-- Inner Banner End -->

        <!-- Service Area --> */}
        <section className="service-area pt-100 pb-70">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Services That We Provide</h2>
                    <div className="section-icon">
                        <div className="icon">
                            <i className="flaticon-dna"></i>
                        </div>
                    </div>
                    <p>
                        We provide excellent services for your ultimate good health. Here some of the services are included
                        for your better understand that we are always at your side.
                    </p>
                </div>
                <div className="row pt-45">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                           <img src="assets/img/services/service-img1.jpg" alt="Images"/>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="flaticon-doctor"></i>
                                </div>
                                <h3>Search Medicine</h3>
                                <div className="content">
                                    <p>We provide  wide range of pharmaceis. So you can Search the medicine available pharmacy.</p>
                                </div>
                            </div>
                            <div className="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div className="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                            <img src="assets/img/services/service-img2.jpg" alt="Images"/>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="flaticon-syringe"></i>
                                </div>
                                <h3>Oder your medication</h3>
                                <div className="content">
                                    <p>We provide service, you can oder the medicine that you need</p>
                                </div>
                            </div>
                            <div className="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div className="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                            <img src="assets/img/services/service-img3.jpg" alt="Images"/>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="flaticon-male"></i>
                                </div>
                                <h3>Expiry date tracking system</h3>
                                <div className="content">
                                    <p>As a pharmaciest you can search medicine expirations..</p>
                                </div>
                            </div>
                            <div className="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div className="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                           <img src="assets/img/services/service-img4.jfif" alt="Images"/>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="flaticon-stethoscope-1"></i>
                                </div>
                                <h3>Location tracking</h3>
                                <div className="content">
                                    <p>You can get a knowledge about where the pharmaciest are located.</p>
                                </div>
                            </div>
                            <div className="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div className="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                            <img src="assets/img/services/service-img5.jpg" alt="Images"/>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="flaticon-caduceus-symbol"></i>
                                </div>
                                <h3>Pharmacy Service</h3>
                                <div className="content">
                                    <p>We provide  wide range of medical pharmaceis that the medicine is available.</p>
                                </div>
                            </div>
                            <div className="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div className="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card">
                            <img src="assets/img/services/service-img6.jpg" alt="Images"/>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="flaticon-ambulance-2"></i>
                                </div>
                                <h3>Emergency Services</h3>
                                <div className="content">
                                    <p>We provide an emergenacy service that you can get from us you can contact our top pharmacies.</p>
                                </div>
                            </div>
                            <div className="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div className="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <a href="#" className="prev page-numbers">
                                <i className="bx bx-chevron-left"></i>
                            </a>

                            <span className="page-numbers current" aria-current="page">1</span>
                            <a href="#" className="page-numbers">2</a>
                            <a href="#" className="page-numbers">3</a>
                            
                            <a href="#" className="next page-numbers">
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-dots">
                <img src="assets/img/services/service-dots.png" alt=""/>
            </div>
        </section>
       {/*  <!-- Service Area End -->

        

        <!-- Banner Bottom Three --> */}
        <div className="banner-bottom-three pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="banner-bottom-item">
                            <i className='flaticon-first-aid-kit'></i>
                            <h3>Searching</h3>
                            <p>Searching medicines.</p>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="banner-bottom-item">
                            <i className='flaticon-fast-delivery'></i>
                            <h3>Fast delivery</h3>
                            <p>Fast deliery to  exact location.</p>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="banner-bottom-item">
                            <i className='flaticon-laptop'></i>
                            <h3>Online Shop</h3>
                            <p>Buying product using our application.</p>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Banner Bottom Three End --> */}
                </div>
            </Fragment>
        )
    }
export default Services;