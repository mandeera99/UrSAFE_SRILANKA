import { Row, Col, Table } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import PharmacyHead from "../../components/PharmacyHead";
import { Fragment } from "react";
import NavBar from "../../components/NavBar";

const getOrders = async() => {
  const { data } = await axios.get("/api/order/");
  return data

}

const PharmacistOrdersPage = () => {

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrders();
        // console.log(data[0].user);
        // setUserDetails(data)
        const filteredOrders = data.filter(
          (order) => order.orderItems[0].pharmacy === "ISURU"
        );
        console.log(filteredOrders)
        setOrders(filteredOrders);
      } catch (error) {
        console.log(error.response ? error.response.data : error.message);
      }
    };
  
    fetchData();
  }, []);
  
  const navigate = useNavigate();

  // const handleGoToOrder = ;
  return (

    <Fragment>
      <PharmacyHead/>
      <NavBar fixed="top" />

    <Row className="m-5">
        
      <Col md={10}>
        <h1>Fully Detailed Order Table</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td></td>
                  {/* {item.user.name} */}
                  <td>{item.createdAt}</td>
                  <td>{item.orderTotal.cartSubtotal}</td>
                  <td>
                  {item.isDelivered ? (
                  <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-x-lg text-danger"></i>
                   )}
                  </td>
                  <td>{item.paymentMethod}</td>
                  <td>
                  <button onClick={() => {
                      navigate('/Pharmacists/order-details', { state: { user: item.user, paidDate: item.Date, orderTotal: item.orderTotal.cartSubtotal, orderItems : item.orderItems } });
                  }}>Go to order</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
    </Fragment>
  );
};

export default PharmacistOrdersPage;
