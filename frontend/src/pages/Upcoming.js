import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Upcoming = ()=> {

        return (
            <Fragment>
                <div>
{/*                     <!-- Start Coming Soon Area -->
 */}        <div className="coming-soon-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="coming-soon-content">
							<h1>Coming Soon</h1>
							<p>What are the new details and updates about our application to know that enter  your mail address.</p>

							<div id="timer">
								<div id="days"></div>
								<div id="hours"></div>
								<div id="minutes"></div>
								<div id="seconds"></div>
							</div>
							
							<form className="newsletter-form" data-toggle="validator">
								<input type="email" className="input-newsletter" placeholder="Enter email address" name="EMAIL" required autocomplete="off"/>
			
								<button type="submit" className="default-btn">
									Notify Me
								</button>
								<div id="validator-newsletter" className="form-result"></div>
							</form> 

							<ul className="header-content-right">
								<li>
									<a href="#">
										<i className="bx bxl-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="bx bxl-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="bx bxl-pinterest-alt"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="bx bxl-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
{/* 		<!-- End Coming Soon Area -->
 */}             
                </div>
            </Fragment>
        )
    }

export default Upcoming;