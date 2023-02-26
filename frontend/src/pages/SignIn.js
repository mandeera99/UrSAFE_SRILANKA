import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class SignIn extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />


                    <div class="inner-banner inner-bg2">
            <div class="container">
                <div class="inner-title">
                    <h3>Sign In</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Sign In</li>
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

        <!-- Sign In Area --> */}
        <div class="sign-in-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="user-all-form">
                            <div class="contact-form">
                                <div class="section-title text-center">
                                    <span>Sign In</span>
                                    <h2>Sign In to Your Account!</h2>
                                </div>
                                <form id="contactForm">
                                    <div class="row">
                                        <div class="col-lg-12 ">
                                            <div class="form-group">
                                                <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your Username or Email" placeholder="Username or Email"/>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-group">
                                                <input class="form-control" type="password" name="password" placeholder="Password"/>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-sm-6 form-condition">
                                            <div class="agree-label">
                                                <input type="checkbox" id="chb1"/>
                                                <label for="chb1">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
            
                                        <div class="col-lg-6 col-sm-6">
                                            <a class="forget" href="#">Forgot my password?</a>
                                        </div>
        
                                        <div class="col-lg-12 col-md-12 text-center">
                                            <button type="submit" class="default-btn">
                                                Sign In Now
                                            </button>
                                        </div>

                                        <div class="col-12">
                                            <p class="account-desc">
                                                Not a member?
                                                <a href="sign-up.html">Sign Up</a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/*         <!-- Sign In Area End -->
 */}

                    <Footer/>
                </div>
            </Fragment>
        )
    }
}
export default SignIn;