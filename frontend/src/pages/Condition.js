import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Condition extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />

                    {/*                     <!-- Inner Banner -->
 */}        <div class="inner-banner inner-bg5">
                        <div class="container">
                            <div class="inner-title">
                                <h3>Terms & Conditions</h3>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>Terms & Conditions</li>
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
                    {/*   <!-- Inner Banner End -->

        <!-- Terms Conditions Area --> */}
                    <div class="terms-conditions-area pt-100 pb-70">
                        <div class="container">
                            <div class="section-title text-center">
                                <span>Information & Notices</span>
                                <h2>UrSAFE Terms & Conditions</h2>
                            </div>
                            <div class="row pt-45">
                                <div class="col-lg-12">
                                    <div class="terms-conditions-img">
                                        <img src="assets/img/terms-condition-img.jpg" alt="Images" />
                                    </div>

                                    <div class="single-content">
                                        <h3>Introduction</h3>
                                        <p>
                                            Due to the economical crisis raised in Sri lanka,  importing many essential things are limited including medicine. Many hospitals ask patients to buy some of rare medicines from outside pharmacies. But some of these medicines are not available in every pharmacy. So, they have to go and ask these pharmacies one by one or contact them one by one. Other than that people ask help from the others using social media such as Facebook and  whatsapp.

                                            Since there is no any interconnection with the gender or age to be sick, many of us or at least our family member, relative  or frd have to face these kind of search medicine problems. Actually many of these rare medicines are available in some pharmacies but as we can see, finding those mesicines is a difficult, stressful, tiring and time consuming task for them.
                                            In other way around pharmacy owners also need a proper system to enter and maintain the medicine details for the pharmacy.
                                            Other than that, while collecting responses, many pharmacies told that it is better to have a system to detect medicine expiry details.
                                            So, what is the Solution.

                                        </p>
                                        <p>
                                            UrSAFE SL is a web based application which mainly support customer to search and find medicines. In here customers need to search medicines on the search bar with their name and system will display the nearest pharmacies as cards that the medicine is available for lowest prices. After clicking these cards we can see the pharmacy details with their location.

                                            In our system, pharmacy owners need add the medicines that are available in their pharmacies to their account and update their details.
                                            they can expand their business to online mode and they can check all of thier medicine details including medicine expiry dates in here.
                                        </p>
                                    </div>

                                    <div class="single-content">
                                        <h3>Accessing Our Site</h3>
                                        <p>
                                            You do not need to create a account at the begining, rather than you can serach where the medicine is available and you can buy that medicine using your own way .If you want to buy medicine using our application you need to create an account and login to our system and buy that medicine .
                                        </p>

                                    </div>

                                    <div class="single-content">
                                        <h3>Using Our Site</h3>
                                        <p>
                                            Using our system you can find rare medicine .To search that medicine you need to enter only the medicine name then our system provide where the medicine is available and also the location of the pharmacy and the distance form you to pharmcy
                                        </p>

                                    </div>



                                    <div class="single-content">
                                        <h3>Exclusions and limitations</h3>
                                        <p>
                                          
                                            You can not get beauty product and other ayurvedic products using our application and also you have to be honestly enter your personel details to our system.If there are any issue at the payment stage then medicine is not diliver to you ,so please enter a valid card information when you buying the products.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*         <!-- Terms Conditions Area End -->
 */}                    <Footer />
                </div>
            </Fragment>
        )
    }
}
export default Condition;