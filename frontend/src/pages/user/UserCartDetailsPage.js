import { Fragment } from "react";
import {
    Row,
    Col,
    Form,
    Alert,
    ListGroup,
    Button,
  } from "react-bootstrap";
import Header from "../Header";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CartItemComponent from "../../componenets/CartItemComponent";
import { useCartContext } from '../../hooks/useCartContext';
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


  
  const UserCartDetailsPage = () => {
    const { cart } = useCartContext();
    const [userDetails, setUserDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("pp");
    const [userId,setUserId] = useState("");


    const navigate = useNavigate();

    const createOrder = async (orderData) => {
      try {
        const { data } = await axios.post("/api/order/", { ...orderData });
        return data;
      } catch (error) {
        throw new Error("Failed to create the order");
      }
    }





    const changeCount = (productID, count) => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const updatedCartItems = cart.cartItems.map((cartItem) => {
        if (cartItem.productId === productID) {
          return {
            ...cartItem,
            quantity: count,
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


    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user.id);
      const fetchUserDetails = async () => {
        try {
          const { data } = await axios.get("/api/user/profile/"+ user.id);
          setUserId(user.id);
          setUserDetails(data);
        } catch (error) {
          console.log(error.response ? error.response.data : error.message);
        }
      };
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (storedCart) {
        setCartSubtotal(storedCart.cartSubtotal);
      }
  
      fetchUserDetails();
      // console.log(userDetails);
      
    }, []);

    const choosePayment = (e) => {
      setPaymentMethod(e.target.value);
  }

  
  const orderHandler = () => {
    const orderData = {
      user:userId,
      orderTotal: {
        itemsCount: cartItems.length,
        cartSubtotal: cartSubtotal,
      },
      cartItems: cartItems.map((item) => ({
        productID: item._id,
        name: item.medi_name,
        price: item.price,
        image: { path: item.images[0] ? (item.images[0].path ?? null) : null },
        quantity: item.qty,
        pharmacy: item.pharmacy_name,
        count:2
      })),
      paymentMethod: paymentMethod,
    };
  
    console.log(orderData); // Log the orderData object
  
    createOrder(orderData)
      .then((data) => {
        if (data) {
          navigate("/user/order-details/" + data._id);
        }
      })
      .catch((err) => console.log(err));
  };

  // orderHandler();
      
      return(
      <Fragment>
        <Header/>
      <div md={8} className="inner-banner inner-bg15 text-white">
      <div className="container">
        <Row className="banner-content">
          <h1 className="text-white">Cart Details</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Shipping</h2>
                {/* {console.log(cartItems)} */}
                <b>Name</b>: 
                {userDetails && userDetails.name}
                <br />
                <b>Address</b>: 
                {userDetails && userDetails.address}
                <br />
                <b>Phone</b>:  
                {userDetails && userDetails.phoneNumber}
              </Col>
              <Col md={6}>
                <h2 className="text-white">Payment method</h2>
                <Form.Select className="text-black" onChange={choosePayment}>
                  <option value="pp">PayPal</option>
                  <option value="cod">
                    Cash On Delivery (delivery may be delayed)
                  </option>
                </Form.Select>
              </Col>
              <Row >
                <Col>
                  <Alert className="mt-3" variant="danger">
                    Not delivered. In order to make order, fill out your profile with correct address, city etc.
                  </Alert>
                </Col>
                <Col>
                  <Alert className="mt-3" variant="success">
                    Not paid yet
                  </Alert>
                </Col>
              </Row>
            </Row>
            <br />
            <h2>Order items</h2>
            <ListGroup variant="flush">
              {cartItems.map((item, idx) => (
              <CartItemComponent item={item} key={idx} style={{ borderRadius: '25px' }} ChangeCount={changeCount} />
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Order summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Items price (after tax): <span className="fw-bold">Rs.{cartSubtotal}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Shipping: <span className="fw-bold">included(Rs.100)</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Tax: <span className="fw-bold">included</span>
              </ListGroup.Item>
              <ListGroup.Item className="text-danger">
                Total price: <span className="fw-bold">Rs.{cartSubtotal + 100}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                {/* <LinkContainer to="/user/order-details"> */}
                  <Button onClick={orderHandler} size="lg" variant="danger" type="button">
                    Pay for the order
                  </Button>
                  {/* </LinkContainer> */}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      </div>
      </Fragment>  
    );
  };
  
  export default UserCartDetailsPage;
  
  