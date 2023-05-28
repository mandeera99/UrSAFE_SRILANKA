import React, { useEffect } from "react";
import { Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import Header from "./Header";
import axios from 'axios';
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useCartContext } from "../hooks/useCartContext";
import { useNavigate, useParams } from "react-router-dom";
import SortOptionsComponent from '../componenets/SortOptionsComponent';
import  PaginationComponent  from "../componenets/PaginationComponent";
import { ListGroup } from "react-bootstrap";



function Medicine () {
    const [ products, setProducts] = useState([]);
    const [paginationLinksNumber, setPaginationLinksNumber] = useState(null);
    const [pageNum, setPageNum] = useState(null);
    const { dispatch } = useCartContext();
    const [sortOption, setSortOption] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [searchQuery2, setSearchQuery2] = useState("");

    const { pageNumParam } = useParams() || 1;
    const { searchQuery } = useParams() || "";

    const getProducts = async (pageNumParam = null, searchQuery = "", sortOption = "") => {
        const search = searchQuery ? `search/${searchQuery}/` : "";
        const url = `/api/medicines/${search}?pageNum=${pageNumParam}&sort=${sortOption}`;
        const { data } = await axios.get(url);
        return data;
      };
      

      useEffect(() => {
        getProducts(pageNumParam, searchQuery, sortOption)
          .then((products) => {
            setProducts(products.medicines);
            setPaginationLinksNumber(products.paginationLinksNumber);
            setPageNum(products.pageNum);
            setLoading(false);
            console.log(products.medicines);
          });
      }, [pageNumParam, searchQuery, sortOption]);
      
      
      const addToCartHandler = (productId) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cart'))?.cartItems || [];
        const isProductInCart = existingCartItems.some(item => item.productId === productId);
      
        if (isProductInCart) {
          console.log('Product is already in the cart');
        } else {
          const updatedCartItems = [...existingCartItems, { productId, quantity: 1 }];
          const updatedCart = { cartItems: updatedCartItems, itemsCount: updatedCartItems.length };
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          dispatch({ type: 'ADD_TO_CART', payload: updatedCartItems });
          console.log(updatedCartItems);
          window.location.href = '/cart';
        }
      };
      

      const submitHandler = (e) => {
        if (e.keyCode && e.keyCode !== 13) return;
        e.preventDefault();
        if (searchQuery2.trim()){
            navigate(`/medicine/search/${searchQuery2}`);
        }else {
         navigate(`/medicine`);
        }
     }
     

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
                    <div className="col-lg-4">
                        <div className="product-result-count">
                            <p>Showing 1-8 of 14 results</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="product-search-widget">
                            <form className="product-search-form">
                                <input type="search" onKeyUp={submitHandler} onChange={(e) => setSearchQuery2(e.target.value)} className="form-control" placeholder="Search..."/>
                                <button type="submit" onClick={submitHandler} >
                                    <i className="bx bx-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                    <ListGroup.Item className="mb-3 mt-3">
                         <SortOptionsComponent setSortOption={setSortOption} />
                    </ListGroup.Item>
                        
                    </div>
                </div>
                <div className="row pt-45">
            {products.map((product) => (
                
                    <Card  className="col-lg-3 col-sm-6" style={{ marginTop: "30px", marginBottom: "20px" ,marginRight: "50px"}}>
                        <div className="product-card">
                            <div className="product-img">
                                <Card.Img src={product.images[0] ? product.images[0].path : ''} crossOrigin="annonymous" variant="top"/>
                               
                            </div>
                            <div className="content">
                                <h4>{product.category} <del className="price">Rs {Math.round(product.price * 1.2)}</del></h4>
                                <h3>{product.medi_name}<span>{product.price}</span></h3>
                                <Rating readonly size={20} initialValue={product.rating} /> ({product.reviewsNumber})

                                <div className="product-btn">
                                    <a href="/cart" className="add-btn link-underlines" onClick={() => addToCartHandler(product._id)}>Add To Cart <i className="flaticon-shopping-cart icon"></i></a>
                                    <a href="wishlist.html" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </Card>
                    
                ))}


                    {/* under */}

                    <div className="col-lg-12 col-md-12 d-flex justify-content-center">
                    {paginationLinksNumber > 1 ? (
                        <PaginationComponent
                        
                            searchQuery={searchQuery}
                            paginationLinksNumber={paginationLinksNumber}
                            pageNum={pageNum}
                            />
                            ) : null}
                        
                         {/* <div className="pagination-area">
                            <a href="#" className="prev page-numbers">
                                <i className="bx bx-chevron-left"></i>
                            </a>

                            <span className="page-numbers current" aria-current="page">1</span>
                            <a href="#" className="page-numbers">2</a>
                            <a href="#" className="page-numbers">3</a>
                            
                            <a href="#" className="next page-numbers">
                                <i className="bx bx-chevron-right"></i>
                            </a>
                        </div>  */}
                    
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

export default Medicine;