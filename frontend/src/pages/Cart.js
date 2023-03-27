import React from "react";
import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Cart() {
    return(
      <div md={8} className="inner-banner inner-bg14">
       <div className="container">
      <Row className="banner-content">
        <Col md={8}>
          <div className="text-white">
          <h2>Shopping Cart</h2>
           </div>
          {/* <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent item={{image: {path:"/images/tablets-category.png"}, name: "Product name", price:10, count:10, quantity:10}} key={idx} />
            ))}
          </ListGroup> */}
          
          <Alert variant="info">Your cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 Items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user-cart-details">
                <Button type="button">Proceed To Checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
         
        </Col>
      </Row>
      
    </div>
    </div>
    )
    
    }
export default Cart;