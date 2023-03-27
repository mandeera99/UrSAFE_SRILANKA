import {
    Row,
    Col,
    Form,
    Alert,
    ListGroup,
    Button,
  } from "react-bootstrap";
//   import CartItemComponent from "../../components/CartItemComponent";
  
  const UserCartDetailsPage = () => {
    return (
      <div md={8} className="inner-banner inner-bg15 text-white">
      <div className="container">
        <Row className="banner-content">
          <h1 className="text-white">Cart Details</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name</b>: John Doe <br />
                <b>Address</b>: 8739 Mayflower St. Los Angeles, CA 90063 <br />
                <b>Phone</b>: 888 777 666
              </Col>
              <Col md={6}>
                <h2 className="text-white">Payment method</h2>
                <Form.Select className="text-black">
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
            {/* <ListGroup variant="flush">
              {Array.from({ length: 3 }).map((item, idx) => (
                <CartItemComponent item={{image: {path:"/images/tablets-category.png"}, name: "Product name", price:10, count:10, quantity:10}} key={idx} />
              ))}
            </ListGroup> */}
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Order summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Items price (after tax): <span className="fw-bold">$892</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Shipping: <span className="fw-bold">included</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Tax: <span className="fw-bold">included</span>
              </ListGroup.Item>
              <ListGroup.Item className="text-danger">
                Total price: <span className="fw-bold">$904</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button size="lg" variant="danger" type="button">
                    Pay for the order
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      </div>
    );
  };
  
  export default UserCartDetailsPage;
  
  