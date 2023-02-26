import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class FAQ extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />


                    {/* <!-- Faq Area -->
 */}        <div className="faq-area faq-bg pt-100 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-accordion">
                                        <div className="section-title">
                                            <span>FAQ</span>
                                            <h2>Get Answers Of Your Every Single Question</h2>
                                        </div>
                                        <ul className="accordion">
                                            <li className="accordion-item">
                                                    <i className='bx bx-chevron-down'></i>
                                                    Can we search any medicine through this application ?

                                               
                                                    <p>
                                                    Yes you can search any medicine using medicines name then you can come up with the pharmacy name that the medicine is available.
                                                    </p>
                                                
                                            </li>

                                            <li className="accordion-item">
                                            <i className='bx bx-chevron-down'></i>
                                                    Can we trust those pharmacies?
                                             

                                
                                                    <p>
                                                    yes you can trust the pharmcy beacuse pharmcy got the account by paying to our system .If pharmcy didint send you medicines you can get help by our administrator so admin can delete pharmacy account if there any issue and returrn your money using legal action.                                                    </p>
                                            
                                            </li>

                                            <li className="accordion-item">
                                                    <i className='bx bx-chevron-down'></i>
                                                    How can we trust there is no any expired mediciine ?

                                                    <p>
                                                    You can trust that because we track that using our system at the pharmacy side                                                    </p>
                                            </li>

                                            <li className="accordion-item">
                                                    <i className='bx bx-chevron-down'></i>
                                                    Is there any way to connect admin?

                                                    <p>
                                                        Yes we have that option.You can use chat for communicate with our admin.
                                                    </p>
                                            </li>

                                            <li className="accordion-item">
                                                    <i className='bx bx-chevron-down'></i>
                                                    How to pay the bill online?

                                                    <p>
                                                        Yes we have that option.You can buy medicine through our application please login to our system to buy medicines.
                                                    </p>
                                            </li>

                                        </ul>

                                        
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="faq-counter-area">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="single-counter">
                                                    <h3>200+</h3>
                                                    <span>pharmaceis</span>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-sm-6">
                                                <div className="single-counter">
                                                    <h3>150+</h3>
                                                    <span>customers</span>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-sm-6">
                                                <div className="single-counter">
                                                    <h3>5000+</h3>
                                                    <span>medicines</span>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-sm-6">
                                                <div className="single-counter">
                                                    <h3>0+</h3>
                                                    <span>Years Of Experience</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  <!-- Faq Area End --> */}
                    
                    
                    <Footer />

                </div>
            </Fragment>
        )
    }
}
export default FAQ;