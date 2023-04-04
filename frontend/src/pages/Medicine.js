import React from "react";
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Medicine () {
        return (
            <Fragment><Header/>
                <div>

{/*                     <!-- Inner Banner -->
 */}        <div className="inner-banner inner-bg11">
            <div className="container">
                <div className="inner-title">
                    <h3>Shop</h3>
                    <ul>
                        <li>
                            <a href="/" className="link-underlines">Home</a>
                        </li>
                        <li>Shop</li>
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

        <!-- Product Area --> */}
        <div className="product-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="product-result-count">
                            <p>Showing 1-8 of 14 results</p>
                        </div>
                    </div>

              {/*       <div className="col-lg-3 col-md-6">
                        <div className="product-search-widget">
                            <form className="product-search-form">
                                <input type="search" className="form-control" placeholder="Search..."/>
                                <button type="submit">
                                    <i className="bx bx-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="product-top-bar-ordering">
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
                <div className="row pt-45">
                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product1.jpg" alt="Images"/></a>
                               
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">Rs 500</del></h4>
                                <h3>Panadol <span>Rs 479.23</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="/cart" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html" className="link-underlines"><img src="assets/img/product/product2.jpg" alt="Images"/></a>
                               
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">Rs 1300</del></h4>
                                <h3>paracetamol <span>Rs 1,150</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="cart.html" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product3.jpg" alt="Images"/></a>
                                
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">Rs 3300</del></h4>
                                <h3>Vitamin c <span>Rs 3,250.00</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="cart.html" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product4.png" alt="Images"/></a>
                                <div className="product-add">
                                    <ul>
                                        <li><a href="#"><i className="flaticon-view"></i></a></li>
                                        <li><a href="#"><i className="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                                <h3 className="best-sale">Sale</h3>
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">$250</del></h4>
                                <h3>Xeljanz <span>$200</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="cart.html" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product5.png" alt="Images"/></a>
                                <div className="product-add">
                                    <ul>
                                        <li><a href="#"><i className="flaticon-view"></i></a></li>
                                        <li><a href="#"><i className="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">$250</del></h4>
                                <h3>Jakafi <span>$200</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="cart.html" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product6.png" alt="Images"/></a>
                                <div className="product-add">
                                    <ul>
                                        <li><a href="#"><i className="flaticon-view"></i></a></li>
                                        <li><a href="#"><i className="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">$95</del></h4>
                                <h3>Olumiant <span>$90</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="cart.html" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product7.png" alt="Images"/></a>
                                <div className="product-add">
                                    <ul>
                                        <li><a href="#"><i className="flaticon-view"></i></a></li>
                                        <li><a href="#"><i className="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">$75</del></h4>
                                <h3>Mavrilimumab <span>$70</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="cart.html" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="product-card">
                            <div className="product-img">
                                <a href="shop-details.html"><img src="assets/img/product/product8.png" alt="Images"/></a>
                                <div className="product-add">
                                    <ul>
                                        <li><a href="#"><i className="flaticon-view"></i></a></li>
                                        <li><a href="#"><i className="flaticon-testing"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <h4>Care, Health <del className="price">$115</del></h4>
                                <h3>Tocilizumab <span>$110</span></h3>
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>

                                <div className="product-btn">
                                    <a href="cart.html" className="add-btn link-underlines">Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <a href="#" className="prev page-numbers">
                                <i className="bx bx-chevron-left"></i>
                            </a>

                            <span className="page-numbers current" aria-current="page">1</span>
                            <a href="#" className="page-numbers">2</a>
                            <a href="#" className="page-numbers">3</a>
                            
                            <a href="#" className="next page-numbers">
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/*         <!-- Product Area End -->
 */}  
                </div>
            </Fragment>
        )
    }

export default Medicine
;