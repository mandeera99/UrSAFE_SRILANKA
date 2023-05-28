import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Alert, Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCartContext } from '../hooks/useCartContext';
import Header from './Header';
import CartItemComponent from '../componenets/CartItemComponent';
import axios from 'axios';

function Cart() {
  const { cart, dispatch } = useCartContext();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);


  const changeCount = (productID, count) => {

      const cart = JSON.parse(localStorage.getItem("cart"));
      const updatedCartItems = cart.cartItems.map((cartItem) => {
        if (cartItem.productId === productID) {
          return {
            ...cartItem,
            quantity: count ,
          };
        }
        return cartItem;
      });
      
      const updatedCart = {
        ...cart,
        cartItems: updatedCartItems,
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const updatedCartItems = cart.cartItems.map((cartItem) => {
      const foundItem = cartItems.find((item) => item._id === cartItem.productId);
      if (foundItem) {
        return {
          ...cartItem,
          quantity: changeCount,
        };
      }
      return cartItem;
    });
    const updatedCart = {
      ...cart,
      cartItems: updatedCartItems,
    };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, [changeCount,cartItems]);



  const getProducts = async () => {
    try {
      const { data } = await axios.get('/api/medicines/all');
      return data.medicines;
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cart');
    const parsedCartItems = JSON.parse(cartItemsFromLocalStorage);
    const itemIds = parsedCartItems ? parsedCartItems.cartItems.map(item => item.productId) : [];

    getProducts()
      .then((products) => {
        const filteredCartProducts = products.filter((product) =>
          itemIds.includes(product._id)
        );
        setCartItems(filteredCartProducts);
      });
  }, [cart]);

  const calculateSubtotal = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
  
    let total = 0;
    cartItems.forEach((item) => {
      if (cart.cartItems) {
        const matchedCartItem = cart.cartItems.find((cartItem) => cartItem.productId === item._id);
        console.log(matchedCartItem);
          total += item.price ;

      }
    });
  
    dispatch({ type: 'SET_CART_SUBTOTAL', payload: total });
    setSubtotal(total);
  
    if (cart) {
      cart.cartSubtotal = total;
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems,dispatch]);
    


  
  

    return(
    <Fragment><Header/>
      {/* {console.log(cartItems)} */}
      <div md={8} className="inner-banner inner-bg14">
       <div className="container">
      <Row className="banner-content">
        <Col md={8} >
          <div className="text-white" >
          <h2>Shopping Cart</h2>
           </div>
           {cartItems.length > 0 ? (
              <ListGroup variant="flush" >
                {cartItems.map((item, idx) => (
                  <CartItemComponent item={item} key={idx} style={{ borderRadius: '25px' }} ChangeCount={changeCount}/>
                ))}
              </ListGroup>
            ) : (
              <Alert variant="info">Your cart is empty</Alert>
            )}
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal ({cartItems.length} Items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">Rs.{subtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/cart-details">
                <Button type="button">Proceed To Checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
         
        </Col>
      </Row>
      
    </div>
    </div>
    </Fragment>
    )
    
    }
export default Cart;