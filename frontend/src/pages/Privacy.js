import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Privacy extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />

                    {/* <!-- Inner Banner --> */}
        <div class="inner-banner inner-bg6">
            <div class="container">
                <div class="inner-title">
                    <h3>Privacy Policy</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Privacy Policy</li>
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
        {/* <!-- Inner Banner End -->

        <!-- Privacy-Policy Area --> */}
        <div class="privacy-policy-area pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <span>Privacy Policy</span>
                    <h2>UrSAFE Privacy Policy</h2>
                    <p>This Policy Was Last Updated Feb 01, 2023.</p>
                </div>
                <div class="row pt-45">
                    <div class="col-lg-12">
                        <div class="single-content">
                            <h3>Information collection</h3>
                            <p>
                            Information that you entered to our system is safely saved and only admin can see those informations.we are responsible for your informations.Your payement card details are not saved and we use safely way to get your payments.
                            </p>
                       
                        </div>

                       

                        <div class="single-content">
                            <h3>The Collection, Process and Use of Personal Data</h3>
                            <p>
                            Information that you entered to our system is safely saved and only admin can see those informations.we are responsible for your informations.Your payement card details are not saved and we use safely way to get your payments.

                            </p>
                            
                        </div>

                     
                        <div class="single-content">
                            <h3> Data Protection</h3>
                            <p>
                           Data are protected you can enter your details without any problem.data are only use for check the authentication and the payment stage and also we need to know where to deliver.
                            </p>
                      
                        </div>

                     

                     
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Privacy-Policy Area End --> */}
        

                    <Footer />
                </div>
            </Fragment>
        )
    }
}
export default Privacy;