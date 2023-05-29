import {
    Container,
    Row,
    Col,
    Form,
    Alert,
    ListGroup,
    Button,
  } from "react-bootstrap";
  import CartItemComponent from "../../componenets/PharmacistCartItemComponent";
  import NavBar from "../../components/NavBar";
  import PharmacyHead from "../../components/PharmacyHead";
  import { Fragment } from "react";
  import { useLocation } from 'react-router-dom';
import { Stack, Typography } from "@mui/material";
  
  const PharmacistOrderDetailsPage = () => {

    const location = useLocation();
    console.log(location.state)
    const userData = location.state?.user;
    const paidDate = location.state?.paidDate;
    const orderTotal = location.state?.orderTotal;
    const orderItems = location.state?.orderItems;

    console.log(userData)
    return (
      <Fragment>
      <PharmacyHead/>
      <NavBar fixed="top" />
      <Container fluid>
        <Row className="mt-4">
          <h1>Order Details</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name</b>{userData?.name || "Isuru Kodikara"}<br />
                <b>Address</b>: {userData?.address || "141,panadura Road, Horana, Kalutara, Sri Lanka"} <br />
                <b>ZipCode</b>: {userData?.zipCode || "57729"} <br />
                <b>Phone</b>: {userData?.phoneNumber || "071437360"}<br />
                <b>Payment Method</b>: Paypal
              </Col>
              <Col md={6}>

              </Col>
              <Row>
                <Col>
                  <Alert className="mt-3" variant="danger">
                    Not delivered
                  </Alert>
                </Col>
                <Col>
                  <Alert className="mt-3" variant="success">
                    Paid on {`${new Date(paidDate).getFullYear()}-${new Date(paidDate).getMonth()}-${new Date(paidDate).getDay()}` }
                  </Alert>
                </Col>
              </Row>
            </Row>
            <br />
            <h2>Order items</h2>
            <ListGroup variant="flush">
              {/* {Array.from({ length: 3 }).map((item, idx) => (
                <CartItemComponent key={idx} />
              ))} */}
              {orderItems.map((item) => (
              <Stack direction="row" sx={{ width: "40vw", marginBottom: "20px", borderBottom: "1px solid blue"}} justifyContent="space-between">
              <Typography variant="h6">Name: <span style={{ color: "red"}}>{item.name}</span></Typography>
              <Typography>price: <span style={{ color: "red"}}>{item.price}</span></Typography>
              <Typography>quantity:<span style={{ color: "red"}}> {item.quantity}</span></Typography>
            </Stack>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Order summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Items price (after tax): <span className="fw-bold">{(orderTotal * 1.1).toFixed(2)}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Shipping: <span className="fw-bold">included</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Tax: <span className="fw-bold">included</span>
              </ListGroup.Item>
              <ListGroup.Item className="text-danger">
                Total price: <span className="fw-bold">{(orderTotal * 1.1).toFixed(2)}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button size="lg" variant="danger" type="button">
                    Mark as delivered
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
  };
  
  export default PharmacistOrderDetailsPage;
  
  