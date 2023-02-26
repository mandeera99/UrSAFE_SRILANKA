import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class About extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />
                    {/* <!-- Inner Banner --> */}
                    <div class="inner-banner inner-bg1">
                        <div class="container">
                            <div class="inner-title">
                                <h3>About Us</h3>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                        <div class="inner-banner-shape">
                            <div class="shape1">
                                <img src="assets/img/inner-banner/inner-banner-shape1.png" alt="Images" />
                            </div>
                            <div class="shape2">
                                <img src="assets/img/inner-banner/inner-banner-shape2.png" alt="Images" />
                            </div>
                        </div>
                    </div>
                    {/*         <!-- Inner Banner End -->

        <!-- About Area --> */}
                    <div class="about-area pt-100 pb-70">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="about-right-img">
                                        <img src="assets/img/about-img/about-img.jpg" alt="Images" />
                                        <div class="about-open-hours">
                                            <h3>This application was created by BCS students</h3>
                                            <ul>
                                                <li>
                                                    Mandeera
                                                    <span>SC/2019/11110</span>
                                                </li>
                                                <li>
                                                    Shashika
                                                    <span>SC/2019/11106</span>
                                                </li>
                                                <li>
                                                    Kavinda
                                                    <span>SC/2019/11109</span>
                                                </li>
                                                <li>
                                                    Manuja
                                                    <span>SC/2019/11115</span>
                                                </li>
                                                <li>
                                                    Somesh
                                                    <span>SC/2019/11102</span>
                                                </li>
                                                <li>
                                                    Pawan
                                                    <span>SC/2019/11114</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="about-content">
                                        <div class="section-title">
                                            <span>About Us</span>
                                            <h2>We Are Your Trusted Friend</h2>
                                            <p>UrSAFE SL is a trusted name of Medical Services who is always at your side and your health is our first priority.</p>
                                            <p>Due to the economical crisis raised in Sri lanka,  importing many essential things are limited including medicine. Many hospitals ask patients to buy some of rare medicines from outside pharmacies. But some of these medicines are not available in every pharmacy. So, they have to go and ask these pharmacies one by one or contact them one by one. Other than that people ask help from the others using social media such as Facebook and  whatsapp.
                                                for this prblem,The solution we are going to introduce is UrSAFE SL.
                                                UrSAFE SL is a web based application which mainly support customer to search and find medicines.
                                            </p>
                                        </div>
                                        <div class="about-card">
                                            <i class='flaticon-24-hours bg-three'></i>
                                            <div class="content">
                                                <span>24/7 Support</span>
                                                <p>Our medical team of  different department for long term illness writers and editors makes all the </p>
                                            </div>
                                        </div>

                                        <div class="about-card">
                                            <i class='flaticon-ambulance-2 bg-three'></i>
                                            <div class="content">
                                                <span>Emergency Support</span>
                                                <p>You can place oders at any time  </p>
                                            </div>
                                        </div>
                                        


                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    {/*         <!-- About Area End --> */}


                    <Footer />


                    {/*         <!-- Color Switch Button --> 
 */}                    <div class="switch-box">
                        <label id="switch" class="switch">
                            <input type="checkbox" onchange="toggleTheme()" id="slider" />
                            <span class="slider round"></span>
                        </label>
                    </div>


                </div>
            </Fragment>
        )
    }
}
export default About;