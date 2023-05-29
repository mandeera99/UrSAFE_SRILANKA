import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import NavBar from "../../components/NavBar";
import AdminLinksComponent from "../../componenets/pharmacist/PharmacistLinksComponent";
import ProductCarouselComponent from "../../componenets/PharmacistProductCarouselComponent";
import ExpireMedfilter from "../expireMedfilter";
import PharmacyHead from "../../components/PharmacyHead";
import { useAuthContext } from '../../hooks/useAuthContext';
import OrderIncomeGraph from "../OrderIncomeGraph";
import {PieChart} from "../../componenets/pharmacist/PieChart"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const getOrders = async() => {
  const { data } = await axios.get("/api/order/");
  return data

}



 


const deleteHandler = () => {
  if (window.confirm("Are you sure?")) alert("User deleted!");
}

const PharmacistUsersPage = () => {
  const navigate = useNavigate();

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

  const { user } = useAuthContext()
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
        <div style={{
        height: "40vh"
      }}>
        <PieChart />
      </div>
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
              {/* <th>Order details</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.slice(0,5).map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>

                  {item?.user?.name}
                  </td>
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
                  {/* <button onClick={() => {
                      navigate('/Pharmacist/order-details', { state: { user: item.user, paidDate: item.Date, orderTotal: item.orderTotal.cartSubtotal, orderItems : item.orderItems } });
                  }}>Go to order</button> */}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
          <div>
            <p>&ensp;&ensp;</p>
          </div>
          <ExpireMedfilter />
        </Col>
      </Row>






    </div>

  );
};

export default PharmacistUsersPage;

