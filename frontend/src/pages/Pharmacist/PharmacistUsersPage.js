import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "../../components/NavBar";
import AdminLinksComponent from "../../componenets/pharmacist/PharmacistLinksComponent";
import ProductCarouselComponent from "../../componenets/PharmacistProductCarouselComponent";
import ExpireMedfilter from "../expireMedfilter";
import PharmacyHead from "../../components/PharmacyHead";
import { useAuthContext } from '../../hooks/useAuthContext';
import OrderIncomeGraph from "../OrderIncomeGraph";


const deleteHandler = () => {
  if (window.confirm("Are you sure?")) alert("User deleted!");
}

const PharmacistUsersPage = () => {
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
          <h1>User List</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Is Admin</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>Mark</td>
                    <td>Twain</td>
                    <td>email@email.com</td>
                    <td>
                      <i className={item}></i>
                    </td>
                    <td>
                      <LinkContainer to="/admin/edit-user">
                        <Button className="btn-sm">
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                      </LinkContainer>
                      {" / "}
                      <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                        <i className="bi bi-x-circle"></i>
                      </Button>
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

