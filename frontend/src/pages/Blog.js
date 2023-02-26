import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Blog extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />

                   {/*  <!-- Inner Banner --> */}
        <div class="inner-banner inner-bg4">
            <div class="container">
                <div class="inner-title">
                    <h3> Blog </h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li> Blog </li>
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
       {/*  <!-- Inner Banner End -->

       <!-- Blog Area --> */}
       <div class="blog-area blog-area-item pt-100 pb-70">
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
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>16</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Lockdowns Leads to Fewer Peo- Ple Seeking Medical Care</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img2.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>18</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Emergency Medicine Resea- rch Course for the Doctors</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img3.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>28</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Advance Care Planning Information Session - 2020</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img4.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>14</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> The Ten Worst Hospital Design Features</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img5.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>17</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> 7 Health Myths Your Doctor Wishes You Didn’t Believe</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img6.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>19</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> How to Survive in Post Offer Active Time in Hospital   </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img7.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>21</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> How to Choose the Specia List in Massage</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img8.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>23</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Health</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Advance Care Planning Information Session is Ongoing</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img9.jpg" alt="Images"/>
                                </a>
                                <div class="date">
                                    <ul>
                                        <li>29</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <span class="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Updated Result of the Research Ch of Corona Vaccine</a>
                                </h3>
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
            <div class="blog-shape-icon">
                <i class="flaticon-dna"></i>
            </div>
        </div>
        {/* <!-- Blog Area End --> */}
                    <Footer />
                </div>
            </Fragment>
        )
    }
}
export default Blog;