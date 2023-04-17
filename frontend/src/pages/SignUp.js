import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <Fragment><Header/>
            <div>



                {/* <!-- Inner Banner --> */}
                <div class="inner-banner inner-bg7">
                    <div class="container">
                        <div class="inner-title">
                            <h3>Sign Up</h3>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Sign Up</li>
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
                {/* <!-- Inner Banner End -->

        <!-- Sign Up Area --> */}
                <div class="sign-up-area pt-100 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="user-all-form">
                                    <div class="contact-form">
                                        <div class="section-title text-center">
                                            <span class="span-bg">Sign Up</span>
                                            <h2>Create an Account!</h2>
                                        </div>
                                        <form id="contactForm">
                                            <div class="row">


                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="email" onChange={(e) => setEmail(e.target.value)}
                                                            value={email} name="email" id="email" class="form-control" required data-error="Please enter email" placeholder="Email" />
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <input class="form-control" type="password" onChange={(e) => setPassword(e.target.value)}
                                                            value={password} name="password" placeholder="Password" />
                                                    </div>
                                                </div>
                                                {error && <div className="error">{error}</div>}
                                                <div class="col-lg-12 col-md-12 text-center">
                                                    <button type="submit" class="default-btn" disabled={isLoading} onClick={handleSubmit} href="/">
                                                        Sign Up
                                                    </button>
                                                </div>
                                                

                                                <div class="col-12">
                                                    <p class="account-desc">
                                                        Already have an account?
                                                        <a href="/signIn">Sign In</a>
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
                {/* <!-- Sign Up Area End --> */}

            </div>
        </Fragment>
    )
}

export default SignUp;