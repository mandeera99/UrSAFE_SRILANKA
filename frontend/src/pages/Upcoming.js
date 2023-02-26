import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Upcoming extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />
{/*                     <!-- Start Coming Soon Area -->
 */}        <div class="coming-soon-area">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container">
						<div class="coming-soon-content">
							<h1>Coming Soon</h1>
							<p>What are the new details and updates about our application to know that enter  your mail address.</p>

							<div id="timer">
								<div id="days"></div>
								<div id="hours"></div>
								<div id="minutes"></div>
								<div id="seconds"></div>
							</div>
							
							<form class="newsletter-form" data-toggle="validator">
								<input type="email" class="input-newsletter" placeholder="Enter email address" name="EMAIL" required autocomplete="off"/>
			
								<button type="submit" class="default-btn">
									Notify Me
								</button>
								<div id="validator-newsletter" class="form-result"></div>
							</form> 

							<ul class="header-content-right">
								<li>
									<a href="#">
										<i class="bx bxl-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="bx bxl-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="bx bxl-pinterest-alt"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="bx bxl-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
{/* 		<!-- End Coming Soon Area -->
 */}                    <Footer />
                </div>
            </Fragment>
        )
    }
}
export default Upcoming;