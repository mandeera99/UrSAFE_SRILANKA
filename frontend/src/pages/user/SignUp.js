import UserSignUpFormComponent from "./componenets/UserSignUpFormcomponent";
import PharmacySignUpFormComponent from "./componenets/PharmacySignUpFormComponent";
import { Fragment } from "react";
import React, { useState } from 'react';


function SignUp() {
  const [userType, setUserType] = useState('regularUser');

  const handleValueUser = (value) => {
    setUserType(value);
  };

 

  function renderSignUpForm() {
    if (userType === 'regularUser') {
      return <UserSignUpFormComponent handleValueUser={handleValueUser}/>;
    } else if (userType === 'pharmacyUser') {
      return <PharmacySignUpFormComponent handleValueUser={handleValueUser}/>;
    } else if (userType === 'def') {
      return <UserSignUpFormComponent handleValueUser={handleValueUser}/>;
    }else {
      return null;
    }
  }


        return (
            <Fragment>
                <div>

                    {/* <!-- Inner Banner --> */}
        <div className="inner-banner inner-bg7 ">
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
                    <img src="assets/img/inner-banner/inner-banner-shape1.png" alt="Images"/>
                </div>
                <div className="shape2">
                    <img src="assets/img/inner-banner/inner-banner-shape2.png" alt="Images"/>
                </div>
            </div>
        </div>
        {/* <!-- Inner Banner End -->
           

        <!-- Sign Up Area --> */}
        <div classNameName="sign-up-area pt-100 pb-70 ">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="user-all-form">
                            <div className="contact-form">
                                <div className="section-title text-center">
                                    {/* <span className="span-bg">Sign Up</span> */}
                                    <h2>Create an Account!</h2>
                                </div>
                                {renderSignUpForm()}
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