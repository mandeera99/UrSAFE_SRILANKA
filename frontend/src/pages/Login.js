import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import axios from 'axios'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

  /*   const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    } */
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    
        try {
          const { data } = await axios.post('/api/user/login', { email, password })
          localStorage.setItem('token', data.token)
    
          if (data.userType === 'admin') {
            window.location.href = '/Dashboard'
          } else if(data.userType === 'pharmaciest') {
            window.location.href = '/Pharmacyhome'
          }else {
            window.location.href = '/'
          }
    
    
        } catch (error) {
          console.error(error)
        }
      }

    return (
        <Fragment>
            <div>
                <div className="inner-banner inner-bg2">
                    <div className="container">
                        <div className="inner-title">
                            <h3>Login</h3>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                    <div className="inner-banner-shape">
                        <div className="shape1">
                            <img src="assets/img/inner-banner/inner-banner-shape1.png" alt="Images" />
                        </div>
                        <div className="shape2">
                            <img src="assets/img/inner-banner/inner-banner-shape2.png" alt="Images" />
                        </div>
                    </div>
                </div>
                {/*   <!-- Inner Banner End -->

        <!-- Sign In Area --> */}

                <div className="sign-in-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="user-all-form">
                                    <div className="contact-form">
                                        <div className="section-title text-center">
                                            <span>Sign In</span>
                                            <h2>Sign In to Your Account!</h2>
                                        </div>
                                        <form id="contactForm">
                                            <div className="row">
                                                <div className="col-lg-12 ">
                                                    <div className="form-group">
                                                        <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your Username or Email" placeholder="Username or Email" onChange={(e) => setEmail(e.target.value)}
                                                            value={email} />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                                                            value={password} />
                                                    </div>
                                                </div>
                                                {error && <div className="error">{error}</div>}

                                                <div className="col-lg-6 col-sm-6 form-condition">
                                                    <div className="agree-label">
                                                        <input type="checkbox" id="chb1" />
                                                        <label for="chb1">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-sm-6">
                                                    <a className="forget" href="#">Forgot my password?</a>
                                                </div>

                                                <div className="col-lg-12 col-md-12 text-center">
                                                    <button type="submit" disabled={isLoading} className="default-btn" onClick={handleSubmit} >
                                                        
                                                            Sign In Now
                                                       
                                                    </button>
                                                </div>


                                                <div className="col-12">
                                                    <p className="account-desc">
                                                        Not a member?
                                                        <Link to={"/SignUp"}> Sign Up </Link>
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


            </div>
        </Fragment>
    )
}

export default Login;