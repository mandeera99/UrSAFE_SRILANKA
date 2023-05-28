import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "../../components/NavBar";
import AdminLinksComponent from "../../componenets/pharmacist/PharmacistLinksComponent";
import ProductCarouselComponent from "../../componenets/PharmacistProductCarouselComponent";
import ExpireMedfilter from "../expireMedfilter";
import PharmacyHead from "../../components/PharmacyHead";
import { useAuthContext } from '../../hooks/useAuthContext'
import OrderIncomeGraph from "../OrderIncomeGraph";
import axios from 'axios';
import { useState,useEffect } from "react";

// const getOrders = async() => {
//   const { data } = await axios.get("/api/order/");
//   return data

// }



const PharmacistUsersPage = () => {

  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getOrders();
  //       console.log(data);
  //       const filteredOrders = data.filter(
  //         (order) => order.orderItems[0].pharmacy === "ISURU"
  //       );
  //       setOrders(filteredOrders);
  //     } catch (error) {
  //       console.log(error.response ? error.response.data : error.message);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  

  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get('/api/user/');
      const filteredUsers = data.filter((user) => user.userType === "Pharmacy");
      setUsers(filteredUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
      alert("User deleted!");
    }
  };

  if (!user) {

    return null;

  }
  return (
    <div>
      <PharmacyHead />
      <NavBar fixed="top" />

      <ProductCarouselComponent />



      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
        <OrderIncomeGraph />
          <h1>User List</h1>
          <div>
        <h1>Recent Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          {/* <tbody>
            {orders.map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>{item.user.name}</td>
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

                </tr>
              )
            )}
          </tbody> */}
        </Table>
        </div>
        <div>
          <h1>Pharmacy Details</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Pharmacy Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map(
                (item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                    {item.phoneNumber}
                      {/* <i className={item}></i> */}
                    </td>
                    <td>{item.address}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
          <div>
            <p>&ensp;&ensp;</p>
          </div>
          <ExpireMedfilter />
          </div>
        </Col>
      </Row>






    </div>

  );
};

export default PharmacistUsersPage;

