import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Medicine extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Header />
{/*                     <!-- Inner Banner -->
 */}        <div class="inner-banner inner-bg11">
            <div class="container">
                <div class="inner-title">
                    <h3>Shop</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Shop</li>
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
        {/* <!-- Inner Banner End -->

        <!-- Product Area --> */}
        <div class="product-area pt-100 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="product-result-count">
                            <p>Showing 1-8 of 14 results</p>
                        </div>
                    </div>

              {/*       <div class="col-lg-3 col-md-6">
                        <div class="product-search-widget">
                            <form class="product-search-form">
                                <input type="search" class="form-control" placeholder="Search..."/>
                                <button type="submit">
                                    <i class="bx bx-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
 */}
                    <div class="col-lg-3 col-md-6">
                        <div class="product-top-bar-ordering">
                            <select>
                                <option value="1">Default sorting</option>
                                <option value="2">Sort by popularity</option>
                                <option value="0">Sort by average rating</option>
                                <option value="3">Sort by latest</option>
                                <option value="4">Sort by price: low to high</option>
                                <option value="5">Sort by price: high to low</option>
                                <option value="6">Sort by new</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row pt-45">
                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product1.jpg" alt="Images"/></a>
                               
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">Rs 500</del></h4>
                                <h3>Panadol <span>Rs 479.23</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="/cart" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product2.jpg" alt="Images"/></a>
                               
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">Rs 1300</del></h4>
                                <h3>paracetamol <span>Rs 1,150</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="cart.html" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product3.jpg" alt="Images"/></a>
                                
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">Rs 3300</del></h4>
                                <h3>Vitamin c <span>Rs 3,250.00</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="cart.html" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product4.png" alt="Images"/></a>
                                <div class="product-add">
                                    <ul>
                                        <li><a href="#"><i class="flaticon-view"></i></a></li>
                                        <li><a href="#"><i class="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                                <h3 class="best-sale">Sale</h3>
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">$250</del></h4>
                                <h3>Xeljanz <span>$200</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="cart.html" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product5.png" alt="Images"/></a>
                                <div class="product-add">
                                    <ul>
                                        <li><a href="#"><i class="flaticon-view"></i></a></li>
                                        <li><a href="#"><i class="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">$250</del></h4>
                                <h3>Jakafi <span>$200</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="cart.html" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product6.png" alt="Images"/></a>
                                <div class="product-add">
                                    <ul>
                                        <li><a href="#"><i class="flaticon-view"></i></a></li>
                                        <li><a href="#"><i class="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">$95</del></h4>
                                <h3>Olumiant <span>$90</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="cart.html" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product7.png" alt="Images"/></a>
                                <div class="product-add">
                                    <ul>
                                        <li><a href="#"><i class="flaticon-view"></i></a></li>
                                        <li><a href="#"><i class="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">$75</del></h4>
                                <h3>Mavrilimumab <span>$70</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="cart.html" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="product-card">
                            <div class="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product8.png" alt="Images"/></a>
                                <div class="product-add">
                                    <ul>
                                        <li><a href="#"><i class="flaticon-view"></i></a></li>
                                        <li><a href="#"><i class="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="content">
                                <h4>Care, Health <del class="price">$115</del></h4>
                                <h3>Tocilizumab <span>$110</span></h3>
                                <div class="rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star'></i>
                                </div>

                                <div class="product-btn">
                                    <a href="cart.html" class="add-btn">Add To Cart <i class="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" class="wishlist-btn"><i class="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                        <div class="pagination-area">
                            <a href="#" class="prev page-numbers">
                                <i class="bx bx-chevron-left"></i>
                            </a>

                            <span class="page-numbers current" aria-current="page">1</span>
                            <a href="#" class="page-numbers">2</a>
                            <a href="#" class="page-numbers">3</a>
                            
                            <a href="#" class="next page-numbers">
                                <i class="bx bx-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/*         <!-- Product Area End -->
 */}                    <Footer />
                </div>
            </Fragment>
        )
    }
}
export default Medicine
;