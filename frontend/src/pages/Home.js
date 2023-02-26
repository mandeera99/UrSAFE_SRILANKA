import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <div>

                    {/* <!-- Pre Loader --> */}
                    {/*      <div class="preloader">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="spinner"></div>
                </div>
            </div>
        </div> */}

                    {/*  <!-- End Pre Loader -->
                

       

        <!-- Banner Area --> */}
                    <Header />
                    <div class="banner-area banner-bg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="banner-content">
                                        <span><h3>A BEST WAY TO SEARCH MEDICINE</h3></span>
                                        <div class="input-group">
                                            <input type="search" class="form-control rounded" placeholder="Enter your medicine" aria-label="Search" aria-describedby="search-addon" />
                                            <button type="button" class="btn btn-outline-primary">search</button>
                                        </div>
                                        <h1 class="text-black">UrSAFE SriLanka</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="banner-img">
                            <img src="assets/img/home-one/home-one-img.png" alt="Images" />
                        </div>
                        <div class="banner-shape">
                            <div class="shape1">
                                <img src="assets/img/home-one/shape1.png" alt="Images" />
                            </div>
                            <div class="shape2">
                                <img src="assets/img/home-one/shape2.png" alt="Images" />
                            </div>
                        </div>
                    </div>
                    {/*        <!-- Banner Area End -->

        <!-- Banner Bottom --> */}
                    <div class="banner-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="banner-bottom-card">
                                        <i class='flaticon-call'></i>
                                        <div class="content">
                                            <span>If you have any issue contact us</span>
                                            <h3><a href="tel:+94 (76) 750 3287">+94 (76) 750 3287</a> </h3>
                                            <div ><p class="text-white">WELCOME URSAFE SRI-LANKA WEB APPLICATION</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*       <!-- Banner Bottom End -->

        <!-- About Area --> */}
                    <div class="about-area pt-100 pb-70">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="about-img">
                                        <img src="assets/img/about-img/about-img.jpg" alt="Images" />
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
                                            <i class='flaticon-24-hours bg-one'></i>
                                            <div class="content">
                                                <span>24/7</span>
                                                <p>You can place oders at any time  </p>
                                            </div>
                                        </div>

                                        <div class="about-card">
                                            <i class='flaticon-ambulance-2 bg-two'></i>
                                            <div class="content">
                                                <span>Emergency Support</span>
                                                <p>If there is an emergenacy moment please contact our one of the top pharmacies</p>
                                            </div>
                                        </div>

                                        <div class="about-btn">
                                            <a href="/about" class="default-btn">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*       <!-- About Area End -->

       

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
                                        <a href="/services"><img src="assets/img/services/service-img1.jpg" alt="Images" /></a>
                                        <div class="service-content">
                                            <div class="service-icon">
                                                <i class="flaticon-doctor"></i>
                                            </div>
                                            <h3><a href="/services">Medical search tool</a></h3>
                                            <div class="content">
                                                <p>We provide a search tool to search medicine.</p>
                                            </div>
                                        </div>
                                        <div class="service-shape-1">
                                            <img src="assets/img/services/service-shape1.png" alt="Images" />
                                        </div>
                                        <div class="service-shape-2">
                                            <img src="assets/img/services/service-shape2.png" alt="Images" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6">
                                    <div class="service-card">
                                        <a href="/services"><img src="assets/img/services/service-img2.jpg" alt="Images" /></a>
                                        <div class="service-content">
                                            <div class="service-icon">
                                                <i class="flaticon-syringe"></i>
                                            </div>
                                            <h3><a href="/services">Oder your medication</a></h3>
                                            <div class="content">
                                                <p>We provide service, you can oder the medicine that you need.</p>
                                            </div>
                                        </div>
                                        <div class="service-shape-1">
                                            <img src="assets/img/services/service-shape1.png" alt="Images" />
                                        </div>
                                        <div class="service-shape-2">
                                            <img src="assets/img/services/service-shape2.png" alt="Images" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6">
                                    <div class="service-card">
                                        <a href="/services"><img src="assets/img/services/service-img3.jpg" alt="Images" /></a>
                                        <div class="service-content">
                                            <div class="service-icon">
                                                <i class="flaticon-male"></i>
                                            </div>
                                            <h3><a href="/services">Expiry date tracking system</a></h3>
                                            <div class="content">
                                                <p>As a pharmaciest you can search medicine expirations.</p>
                                            </div>
                                        </div>
                                        <div class="service-shape-1">
                                            <img src="assets/img/services/service-shape1.png" alt="Images" />
                                        </div>
                                        <div class="service-shape-2">
                                            <img src="assets/img/services/service-shape2.png" alt="Images" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6">
                                    <div class="service-card">
                                        <a href="/services"><img src="assets/img/services/service-img4.jfif" alt="Images" /></a>
                                        <div class="service-content">
                                            <div class="service-icon">
                                                <i class="flaticon-stethoscope-1"></i>
                                            </div>
                                            <h3><a href="/services">Location tracking</a></h3>
                                            <div class="content">
                                                <p>You can get a knowledge about where the pharmaciest are located.</p>
                                            </div>
                                        </div>
                                        <div class="service-shape-1">
                                            <img src="assets/img/services/service-shape1.png" alt="Images" />
                                        </div>
                                        <div class="service-shape-2">
                                            <img src="assets/img/services/service-shape2.png" alt="Images" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6">
                                    <div class="service-card">
                                        <a href="/services"><img src="assets/img/services/service-img5.jpg" alt="Images" /></a>
                                        <div class="service-content">
                                            <div class="service-icon">
                                                <i class="flaticon-caduceus-symbol"></i>
                                            </div>
                                            <h3><a href="/services">Pharmacy Service</a></h3>
                                            <div class="content">
                                                <p>We provide  wide range of medical pharmaceis that the medicine is available.</p>
                                            </div>
                                        </div>
                                        <div class="service-shape-1">
                                            <img src="assets/img/services/service-shape1.png" alt="Images" />
                                        </div>
                                        <div class="service-shape-2">
                                            <img src="assets/img/services/service-shape2.png" alt="Images" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6">
                                    <div class="service-card">
                                        <a href="/services"><img src="assets/img/services/service-img6.jpg" alt="Images" /></a>
                                        <div class="service-content">
                                            <div class="service-icon">
                                                <i class="flaticon-ambulance-2"></i>
                                            </div>
                                            <h3><a href="/services">Emergency Service</a></h3>
                                            <div class="content">
                                                <p>We provide an emergenacy service that you can get from us you can contact our top pharmacies.</p>
                                            </div>
                                        </div>
                                        <div class="service-shape-1">
                                            <img src="assets/img/services/service-shape1.png" alt="Images" />
                                        </div>
                                        <div class="service-shape-2">
                                            <img src="assets/img/services/service-shape2.png" alt="Images" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="service-dots">
                            <img src="assets/img/services/service-dots.png" alt="" />
                        </div>
                    </section>
                    {/*      <!-- Service Area End -->

       


        <!-- Emergency Area --> */}
                    <div class="emergency-area ptb-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="emergency-content">
                                        <h2>Get <b>Emergency</b> Care 24/7</h2>
                                        <p>We are always at your side. We are 24 hours available for you in emergency situation.</p>
                                        <div class="emergency-icon-content">
                                            <i class="flaticon-24-hours-1"></i>
                                            <h5 className="text-white">You can find emergency medicines through our application.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="emergency-shape">
                            <img src="assets/img/emergency/emergency-shape.png" alt="Images" />
                        </div>
                    </div>
                    {/*         <!-- Emergency Area End -->

        <!-- Blog Area --> */}
                    <div class="blog-area pt-100 pb-70">
                        <div class="container">
                            <div class="section-title text-center">
                                <h2>Our News & Updates</h2>
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
                                    <div class="blog-card">
                                        <a href="/blog-det">
                                            <img src="assets/img/blog/blog-img.jpg" alt="Images" />
                                        </a>
                                        <div class="content">
                                            <ul>
                                                <li>
                                                    <i class="flaticon-calendar-1"></i>
                                                    Jan.18,2023
                                                    <span>
                                                        <a href="#">Drug</a>
                                                    </span>
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="/blog-det"> Drugs Advertised on TV Aren't Better Than Existing Options: Study</a>
                                            </h3>
                                            <p> Most drugs advertised on television don’t work better than existing alternatives, a new analysis shows. And manufacturers spend more on advertising for those less beneficial drugs than for ones that work better.....</p>
                                            <a href="/blog-det" class="more-btn">
                                                Read More <i class="flaticon-right-arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6">
                                    <div class="blog-card">
                                        <a href="/blog-det">
                                            <img src="assets/img/blog/blog-img2.jpg" alt="Images" />
                                        </a>
                                        <div class="content">
                                            <ul>
                                                <li>
                                                    <i class="flaticon-calendar-1"></i>
                                                    Nov. 17, 2022
                                                    <span>
                                                        <a href="#">Drug</a>
                                                    </span>
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="/blog-det"> A Vaccine Against Deadly Fentanyl Might Be Near</a>
                                            </h3>
                                            <p>Researchers report they have created a vaccine to fight fentanyl addiction, in a potential breakthrough in the opioid epidemic....</p>
                                            <a href="/blog-det" class="more-btn">
                                                Read More <i class="flaticon-right-arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                    <div class="blog-card-side">
                                        <ul>
                                            <li>
                                                <i class="flaticon-calendar-1"></i>
                                                feb.19, 2023
                                                <span>
                                                    <a href="#">Medicine</a>
                                                </span>
                                                <a href="/blog-det">
                                                    <h3> Give a better knowledge about find medicine application session - 2023</h3>
                                                </a>
                                            </li>

                                            <li>
                                                <i class="flaticon-calendar-1"></i>
                                                may.19, 2023
                                                <span>
                                                    <a href="#">Medicine</a>
                                                </span>
                                                <a href="/blog-det">
                                                    <h3> Give a knowledge for pharmaceis about our application</h3>
                                                </a>
                                            </li>

                                            <li>
                                                <i class="flaticon-calendar-1"></i>
                                                may.19, 2023
                                                <span>
                                                    <a href="#">Medicine</a>
                                                </span>
                                                <a href="/blog-det">
                                                    <h3> Aim to develop deliver system and attached to our application</h3>
                                                </a>
                                            </li>

                                            
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="blog-more-btn">
                                        <a href="#" class="default-btn">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-shape-icon">
                            <i class="flaticon-dna"></i>
                        </div>
                    </div>
                    {/*         <!-- Blog Area End -->

        
                    {/*         <!-- Subscribe Area -->
 */}        <div class="subscribe-area ptb-100">
                        <div class="container">
                            <div class="newsletter-area">
                                <h2>Subscribe Our <b>Newsletter</b></h2>
                                <p>Enter your mail to get our news and updates.</p>
                                <form class="newsletter-form" data-toggle="validator" method="POST">
                                    <input type="email" class="form-control" placeholder="Enter Your Email Address" name="EMAIL" required autocomplete="off" />
                                    <button class="subscribe-btn" type="submit">
                                        Submit
                                    </button>
                                    <div id="validator-newsletter" class="form-result"></div>
                                </form>
                            </div>
                        </div>
                        <div class="subscribe-shape">
                            <img src="assets/img/subscribe-img/subscribe-shape.png" alt="Images" />
                        </div>
                    </div>
                    {/*         <!-- Subscribe Area End -->
 */}


                    

      
<Footer />






                </div>
            </Fragment>
        )
    }
}

export default Home;