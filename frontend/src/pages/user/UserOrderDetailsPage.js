import {
    Container,
    Row,
    Col,
    Form,
    Alert,
    ListGroup,
    Button,
  } from "react-bootstrap";
  import { Fragment } from "react";
  import Header from "../Header";
  import CartItemComponent from "../../componenets/CartItemComponent";
  import { useEffect, useState, useRef } from "react";
  import { useParams } from "react-router-dom";
  import axios from 'axios';
  import { loadScript } from "@paypal/paypal-js";
  import { useCartContext } from '../../hooks/useCartContext';

  

  
  const loadPayPalScript = (cartSubtotal, cartItems, orderId, updateStateAfterOrder) => {
    loadScript({ "client-id": "AeAJoJbbengj1bfCYpjKMm9xw7SN5GImvQoBztg4IBMrL3xEcQ5NewvQuj7GsMs0be7A8kig3WjWcw-T" })
      .then(paypal => {
        paypal
          .Buttons(buttons(cartSubtotal, cartItems, orderId, updateStateAfterOrder))
          .render("#paypal-container-element");
      })
      .catch(err => {
        console.error("Failed to load the PayPal JS SDK script", err);
      });
  };
  
  const buttons = (cartSubtotal, cartItems, orderId, updateStateAfterOrder) => {
    return {
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: cartSubtotal,
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: cartSubtotal/304,
                  }
                }
              },
              items: cartItems.map(product => {
                return {
                  name: product.medi_name,
                  unit_amount: {
                    currency_code: "USD",
                    value: product.price,
                  },
                  quantity: product.qty,
                }
              })
            }
          ]
        });
      },
      onCancel: onCancelHandler,
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          var transaction = orderData.purchase_units[0].payments.captures[0];
          if (transaction.status === "COMPLETED" && Number(transaction.amount.value) === Number(cartSubtotal)) {
            updateOrder(orderId)
              .then(data => {
                if (data.isPaid) {
                  updateStateAfterOrder(data.paidAt);
                }
              })
              .catch((err) => console.log(err));
          }
        });
      },
      onError: onErrorHandler,
    };
  };
  
  const onCancelHandler = function () {
    console.log("Cancel");
  };
  
  const onErrorHandler = function (err) {
    console.log("Error");
  };
  
  const updateOrder = async (orderId) => {
    const { data } = await axios.put("/api/order/paid/" + orderId);
    return data;
  };

  const getOrder = async (orderId) => {
    const { data } = await axios.get("/api/order/user/" + orderId);
    return data;
}
  
  const UserOrderDetailsPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isPaid, setIsPaid] = useState(false);
    const [orderButtonMessage, setOrderButtonMessage] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [isDelivered, setIsDelivered] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const paypalContainer = useRef();
    const { id } = useParams();
    const { cart } = useCartContext();




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
  
      const fetchUserDetails = async () => {
        try {
          const { data } = await axios.get("/api/user/profile/" + user.id);
          setUserInfo(data);
        } catch (error) {
          console.log(error.response ? error.response.data : error.message);
        }
      };
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (storedCart) {
        setCartSubtotal(storedCart.cartSubtotal);
      }
  
      fetchUserDetails();
    }, []);
  
    useEffect(() => {
      const fetchOrderDetails = async () => {
        try {
          const { data } = await axios.get("/api/order" + id);
          setCartItems(data.cartItems);
          setCartSubtotal(data.orderTotal);
          setIsPaid(data.isPaid);
          setIsDelivered(data.isDelivered);
          setPaymentMethod(data.paymentMethod);
          setButtonDisabled(data.isPaid || data.paymentMethod === "cod");
        } catch (error) {
          console.log(error.response ? error.response.data : error.message);
        }
      };
  
      fetchOrderDetails();
    }, [id]);
  
    useEffect(() => {
      loadPayPalScript(cartSubtotal, cartItems, id, () => setIsPaid(true));
    }, [cartSubtotal, cartItems, id]);

    useEffect(() => {
      getOrder(id)
        .then((data) => {
          setPaymentMethod(data.paymentMethod);
          data.isDelivered
            ? setIsDelivered(data.deliveredAt)
            : setIsDelivered(false);
          data.isPaid ? setIsPaid(data.paidAt) : setIsPaid(false);
          if (data.isPaid) {
            setOrderButtonMessage("Your order is finished");
            setButtonDisabled(true);
          } else {
            if (data.paymentMethod === "pp") {
              setOrderButtonMessage("Pay for your order");
            } else if (data.paymentMethod === "cod") {
              setButtonDisabled(true);
              setOrderButtonMessage("Wait for your order. You pay on delivery");
            }
          }
        })
        .catch((err) => console.log(err));
    }, []);

    const updateStateAfterOrder = (paidAt) => {
      setOrderButtonMessage("Thank you for your payment");
      setIsPaid(paidAt);
      setButtonDisabled(true);
      paypalContainer.current.style = "display: none";
  }

    const orderHandler = () => {
      setButtonDisabled(true);
      if (paymentMethod === "pp") {
        setOrderButtonMessage(
          "To pay for your order click one of the buttons below"
        );
        if (!isPaid) {
          loadPayPalScript(cartSubtotal, cartItems, id, updateStateAfterOrder)
        }
      } else {
        setOrderButtonMessage("Your order was placed. Thank you");
      }
    };
  
    return (
        <Fragment>
            <Header/>
        <div md={8} className="inner-banner inner-bg15 text-white">
        <div className="container">
        <Row className="mt-4 banner-content">
          <h1>Order Details</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name</b>: {userInfo && `${userInfo.name}`} <br />
                <b>Address</b>: {userInfo && `${userInfo.address} ${userInfo.city} ${userInfo.state} ${userInfo.zipCode}`} {" "}
                 <br />
                <b>Phone</b>: {userInfo && `${userInfo.phoneNumber}`}
              </Col>
              <Col md={6}>
                <h2>Payment method</h2>
                <Form.Select value={paymentMethod} disabled={true}>
                  <option value="pp">PayPal</option>
                  <option value="cod">
                    Cash On Delivery (delivery may be delayed)
                  </option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col>
                <Alert
                  className="mt-3"
                  variant={isDelivered ? "success" : "danger"}
                >
                  {isDelivered ? (
                    <>Delivered at {isDelivered}</>
                  ) : (
                    <>Not delivered</>
                  )}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                  {isPaid ? <>Paid on {isPaid}</> : <>Not paid yet</>}
                </Alert>
              </Col>
            </Row>
            <br />
            <h2>Order items</h2>
            <ListGroup variant="flush">
              {cartItems.map((item, idx) => (
                <CartItemComponent item={item} key={idx} orderCreated={true} style={{ borderRadius: '25px' }}/>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Order summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Items price (after tax):{" "}
                <span className="fw-bold">Rs.{cartSubtotal}</span>
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
                  <Button
                    size="lg"
                    variant="danger"
                    type="button"
                    disabled={buttonDisabled}
                  >
                    {orderButtonMessage}
                  </Button>
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div ref={paypalContainer} id="paypal-container-element"></div>
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
  
  export default UserOrderDetailsPage;
  