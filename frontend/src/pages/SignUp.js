import React, { Fragment, useState } from "react";
import Select from 'react-select';
import Footer from "./Footer";
import Header from "./Header";
import { useSignup } from "../hooks/useSignup";
import axios from 'axios'
const userTypes = [
    { value: 'Customer', label: 'Customer' },
    { value: 'Pharmacy', label: 'Pharmacy' },
    // { value: 'Administrator', label: 'Administrator' },
];

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [userType, setUserType] = useState(null);
    const [pharmacyName, setPharmacyName] = useState('');
    const { signup, error, isLoading } = useSignup()

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        //await signup(email, password, userType.value, name, address, phoneNumber, pharmacyName, zipCode, state, city);

        try {
            
            const success = await signup(email, password, userType.value, name, address, phoneNumber, pharmacyName, zipCode, state, city);
            if(success){
              window.alert("Account creation successful");
              switch (userType.value) {
                case 'Administrator':
                  window.location.href = '/Dashboard';
                  break;
                case 'Pharmacy':
                  window.location.href = '/Pharmacyhome';
                  break;
                case 'Customer':
                  window.location.href = '/';
                  break;
                default:
                  window.location.href = '/SignUp';
                  break;
              }}
            
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.log('Response Data:', error.response.data);
                console.log('Response Status:', error.response.status);
                alert('An error occurred. Please try again.');

            }
        }
    };

    

    const handleUserTypeChange = (selectedOption) => {
        setUserType(selectedOption);
    };


    const [validated, setValidated] = useState(false);

    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirm = document.querySelector("input[name=confirmPassword]")
        if (confirm.value === password.value) {
            confirm.setCustomValidity("")
        } else {
            confirm.setCustomValidity("Password do not match")
        }
    }

    return (
        <Fragment>
            <Header />
            <div>
                {/* Inner Banner */}
                <div className="inner-banner inner-bg7">
                    <div className="container">
                        <div className="inner-title">
                            <h3>Sign Up</h3>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Sign Up</li>
                            </ul>
                        </div>
                    </div>
                    <div className="inner-banner-shape">
                        <div className="shape1">
                            <img
                                src="assets/img/inner-banner/inner-banner-shape1.png"
                                alt="Images"
                            />
                        </div>
                        <div className="shape2">
                            <img
                                src="assets/img/inner-banner/inner-banner-shape2.png"
                                alt="Images"
                            />
                        </div>
                    </div>
                </div>
                {/* Inner Banner End */}

                {/* Sign Up Area */}
                <div className="sign-up-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="user-all-form">
                                    <div className="contact-form">
                                        <div className="section-title text-center">
                                            <span className="span-bg">Sign Up</span>
                                            <h2>Create an Account!</h2>
                                        </div>
                                        <form id="contactForm" onSubmit={handleSubmit}>
                                            <div className="row">

                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                                                            name="name" class="form-control" required data-error="Please enter name" placeholder="name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="email" onChange={(e) => setEmail(e.target.value)}
                                                            value={email} name="email" id="email" class="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">

                                                    <div class="form-group">
                                                        <input type="password" onChange={(e) => setPassword(e.target.value)}
                                                            value={password} name="password" class="form-control" placeholder="password" />
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <input class="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)}
                                                            value={confirmPassword} name="confirmPassword" placeholder="confirmPassword" />
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label htmlFor="userType">User Type:</label>
                                                        <Select options={userTypes} value={userType} onChange={handleUserTypeChange} />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        {userType?.value === 'Pharmacy' && (
                                                            <div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setAddress(e.target.value)}
                                                                            value={address} name="address" placeholder="address" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="tel" onChange={(e) => setPhoneNumber(e.target.value)}
                                                                            value={phoneNumber} name="phoneNumber" placeholder="phoneNumber" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setPharmacyName(e.target.value)}
                                                                            value={pharmacyName} name="pharmacyName" placeholder="pharmacyName" />
                                                                    </div>
                                                                </div>

                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setState(e.target.value)}
                                                                            value={state} name="province" placeholder="province" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setCity(e.target.value)}
                                                                            value={city} name="city" placeholder="city" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )}
                                                        {userType?.value === 'Customer' && (
                                                            <div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setAddress(e.target.value)}
                                                                            value={address} name="address" placeholder="address" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="tel" onChange={(e) => setPhoneNumber(e.target.value)}
                                                                            value={phoneNumber} name="phoneNumber" placeholder="phoneNumber" />
                                                                    </div>
                                                                </div>

                                                                {/* <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setZipCode(e.target.value)}
                                                                            value={zipCode} name="zipCode" placeholder="zipCode" />
                                                                    </div>
                                                                </div> */}
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setState(e.target.value)}
                                                                            value={state} name="province" placeholder="province" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="text" onChange={(e) => setCity(e.target.value)}
                                                                            value={city} name="city" placeholder="city" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        )}
                                                        {/* {userType?.value === 'Administrator' && (
                                                            <div>

                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <input class="form-control" type="tel" onChange={(e) => setPhoneNumber(e.target.value)}
                                                                            value={phoneNumber} name="phoneNumber" placeholder="phoneNumber" />
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        )} */}
                                                    </div>
                                                </div>

                                            </div>
                                            {error && <span style={{ color: "red !important" }}><p>{error}</p></span>}


                                        </form>

                                    </div>


                                    <div class="col-lg-12 col-md-12 text-center">
                                        <button type="submit" class="default-btn" disabled={isLoading} onClick={handleSubmit} href="/">
                                            Sign Up
                                        </button>
                                    </div>
                                    <div class="col-12 col-md-12 text-center">
                                        <p class="account-desc">
                                            Already have an account?
                                            <a href="/signIn">Sign In</a>
                                        </p>
                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            {/* <!-- Sign Up Area End --> */}


        </Fragment>

    );
};


export default SignUp;