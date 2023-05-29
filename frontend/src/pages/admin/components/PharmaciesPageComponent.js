import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from "react";

const PharmaciesPageComponent = ({ fetchUsers, deleteUser, productId }) => {
  const [users, setUsers] = useState([]);
  const [userDeleted, setUserDeleted] = useState(false);

  const deleteHandler = async (userId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteUser(userId);
      if (data === "user removed") {
        setUserDeleted(!userDeleted);
      }
    }
  };

  useEffect(() => {
    const abctrl = new AbortController();
    fetchUsers(abctrl)
      .then((res) => setUsers(res))
      .catch((er) =>
        console.log(
          er.response.data.message
            ? er.response.data.message
            : er.response.data
        )
      );
    return () => abctrl.abort();
  }, [userDeleted]);

  // Hard coded user details
  const hardcodedUsers = [
    {
      name: "New Lanka Pharmacy",
      lastName: "Lastname",
      email: "newlanka@example.com",
      isAdmin: false
    },
    {
      name: "Isuru Pharmacy",
      lastName: "Lastname",
      email: "isuru@example.com",
      isAdmin: false
    },
    {
      name: "Nawala Chem Pharmacy",
      lastName: "Lastname",
      email: "nawala@example.com",
      isAdmin: false
    }
  ];
  

  useEffect(() => {
    setUsers(hardcodedUsers);
  }, []);

  return (
    <Row className="m-5">
      {/* <Col md={2}>
        <AdminLinksComponent />
      </Col> */}
      <Col md={10}>
        <h1>
          Pharmacy List{" "}
          <LinkContainer to="/product-list">
            <Button variant="primary">View Pharmacy List</Button>
          </LinkContainer>
        </h1>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              {/* <th>Is Admin</th> */}
              <th>View/Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                {/* <td>
                  <i className={item}></i>
                </td> */}
                <td>
                  {/* <LinkContainer to={`/admin/edit-user/${user._id}`}> */}
                  {/* <LinkContainer to={`/product-details/${productId}`}>
                    <Button variant="primary">View Profile</Button>
                  </LinkContainer>
                  {" / "} */}

                  <LinkContainer to={`/admin/edit-pharmacy/${user._id}`}>
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}

                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default PharmaciesPageComponent;
