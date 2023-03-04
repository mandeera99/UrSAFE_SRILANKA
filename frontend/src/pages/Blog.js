import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Blog() {
        return (
            <Fragment>
                <div>

                   {/*  <!-- Inner Banner --> */}
        <div className="inner-banner inner-bg4">
            <div className="container">
                <div className="inner-title">
                    <h3> Blog </h3>
                    <ul>
                        <li>
                            <a href="/" className="link-underlines">Home</a>
                        </li>
                        <li> Blog </li>
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
       {/*  <!-- Inner Banner End -->

       <!-- Blog Area --> */}
       <div className="blog-area blog-area-item pt-100 pb-70">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Our News & Updates</h2>
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
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>16</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Lockdowns Leads to Fewer Peo- Ple Seeking Medical Care</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img2.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>18</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Emergency Medicine Resea- rch Course for the Doctors</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img3.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>28</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Advance Care Planning Information Session - 2020</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img4.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>14</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> The Ten Worst Hospital Design Features</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img5.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>17</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> 7 Health Myths Your Doctor Wishes You Didn’t Believe</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img6.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>19</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Healthcare</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> How to Survive in Post Offer Active Time in Hospital   </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img7.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>21</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> How to Choose the Specia List in Massage</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img8.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>23</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Health</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Advance Care Planning Information Session is Ongoing</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-item-img">
                                <a href="blog-details.html">
                                    <img src="assets/img/blog/blog-img9.jpg" alt="Images"/>
                                </a>
                                <div className="date">
                                    <ul>
                                        <li>29</li>
                                        <li>Sep</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="topic">
                                    <a href="#">Medicine</a>
                                </span>
                                <h3>
                                    <a href="blog-details.html"> Updated Result of the Research Ch of Corona Vaccine</a>
                                </h3>
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
            <div className="blog-shape-icon">
                <i className="flaticon-dna"></i>
            </div>
        </div>
        {/* <!-- Blog Area End --> */}
                </div>
            </Fragment>
        )
    }

export default Blog;