import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Services extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />


                    {/* <!-- Inner Banner --> */}
        <div class="inner-banner inner-bg7">
            <div class="container">
                <div class="inner-title">
                    <h3> Services</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li> Services </li>
                    </ul>
                </div>
            </div>
            <div class="inner-banner-shape">
                <div class="shape1">
                    <img src="assets/img/inner-banner/inner-banner-shape1.png" alt="Images"/>
                </div>
                <div class="shape2">
                    <img src="assets/img/inner-banner/inner-banner-shape2.png" alt="Images"/>
                </div>
            </div>
        </div>
      {/*   <!-- Inner Banner End -->

        <!-- Service Area --> */}
        <section class="service-area pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Services That We Provide</h2>
                    <div class="section-icon">
                        <div class="icon">
                            <i class="flaticon-dna"></i>
                        </div>
                    </div>
                    <p>
                        We provide excellent services for your ultimate good health. Here some of the services are included
                        for your better understand that we are always at your side.
                    </p>
                </div>
                <div class="row pt-45">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                           <img src="assets/img/services/service-img1.jpg" alt="Images"/>
                            <div class="service-content">
                                <div class="service-icon">
                                    <i class="flaticon-doctor"></i>
                                </div>
                                <h3>Search Medicine</h3>
                                <div class="content">
                                    <p>We provide  wide range of pharmaceis. So you can Search the medicine available pharmacy.</p>
                                </div>
                            </div>
                            <div class="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div class="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <img src="assets/img/services/service-img2.jpg" alt="Images"/>
                            <div class="service-content">
                                <div class="service-icon">
                                    <i class="flaticon-syringe"></i>
                                </div>
                                <h3>Oder your medication</h3>
                                <div class="content">
                                    <p>We provide service, you can oder the medicine that you need</p>
                                </div>
                            </div>
                            <div class="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div class="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <img src="assets/img/services/service-img3.jpg" alt="Images"/>
                            <div class="service-content">
                                <div class="service-icon">
                                    <i class="flaticon-male"></i>
                                </div>
                                <h3>Expiry date tracking system</h3>
                                <div class="content">
                                    <p>As a pharmaciest you can search medicine expirations..</p>
                                </div>
                            </div>
                            <div class="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div class="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                           <img src="assets/img/services/service-img4.jfif" alt="Images"/>
                            <div class="service-content">
                                <div class="service-icon">
                                    <i class="flaticon-stethoscope-1"></i>
                                </div>
                                <h3>Location tracking</h3>
                                <div class="content">
                                    <p>You can get a knowledge about where the pharmaciest are located.</p>
                                </div>
                            </div>
                            <div class="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div class="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <img src="assets/img/services/service-img5.jpg" alt="Images"/>
                            <div class="service-content">
                                <div class="service-icon">
                                    <i class="flaticon-caduceus-symbol"></i>
                                </div>
                                <h3>Pharmacy Service</h3>
                                <div class="content">
                                    <p>We provide  wide range of medical pharmaceis that the medicine is available.</p>
                                </div>
                            </div>
                            <div class="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div class="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <img src="assets/img/services/service-img6.jpg" alt="Images"/>
                            <div class="service-content">
                                <div class="service-icon">
                                    <i class="flaticon-ambulance-2"></i>
                                </div>
                                <h3>Emergency Services</h3>
                                <div class="content">
                                    <p>We provide an emergenacy service that you can get from us you can contact our top pharmacies.</p>
                                </div>
                            </div>
                            <div class="service-shape-1">
                                <img src="assets/img/services/service-shape1.png" alt="Images"/>
                            </div>
                            <div class="service-shape-2">
                                <img src="assets/img/services/service-shape2.png" alt="Images"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                        <div class="pagination-area">
                            <a href="#" class="prev page-numbers">
                                <i class="bx bx-chevron-left"></i>
                            </a>

                            <span class="page-numbers current" aria-current="page">1</span>
                            <a href="#" class="page-numbers">2</a>
                            <a href="#" class="page-numbers">3</a>
                            
                            <a href="#" class="next page-numbers">
                                <i class="bx bx-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-dots">
                <img src="assets/img/services/service-dots.png" alt=""/>
            </div>
        </section>
       {/*  <!-- Service Area End -->

        

        <!-- Banner Bottom Three --> */}
        <div class="banner-bottom-three pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="banner-bottom-item">
                            <i class='flaticon-first-aid-kit'></i>
                            <h3>Searching</h3>
                            <p>Searching medicines.</p>
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6">
                        <div class="banner-bottom-item">
                            <i class='flaticon-fast-delivery'></i>
                            <h3>Fast delivery</h3>
                            <p>Fast deliery to  exact location.</p>
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div class="banner-bottom-item">
                            <i class='flaticon-laptop'></i>
                            <h3>Online Shop</h3>
                            <p>Buying product using our application.</p>
                            <div class="circle"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Banner Bottom Three End --> */}
                    <Footer />
                </div>
            </Fragment>
        )
    }
}
export default Services;