import React, { useState } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";

const CustomersPageComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null);

  const handleActivate = (userId) => {
    if (userId === users[0]._id) {
      setActiveUserId(userId);
      setLoading(true);
      // Additional logic to handle activation goes here
      setLoading(false);
    }
  };

  const handleDeactivate = (userId) => {
    if (userId === users[0]._id) {
      setActiveUserId(null);
      setLoading(true);
      // Additional logic to handle deactivation goes here
      setLoading(false);
    }
  };

  // Hardcoded user details
  const hardcodedUsers = [
    { name: "Alice", lastName: "Lastname", email: "newalice@example.com" },
    { name: "Bob", lastName: "Lastname", email: "newbob@example.com" },
    { name: "nimal", lastName: "Lastname", email: "nimal@example.com" },
    { name: "kamal", lastName: "Lastname", email: "kamal@example.com" },
    { name: "seetha", lastName: "Lastname", email: "newseetha@example.com" },
    { name: "parami", lastName: "Lastname", email: "newparami@example.com" },
    { name: "sradda", lastName: "Lastname", email: "newsradda@example.com" },
    { name: "akbarb", lastName: "Lastname", email: "newakbarb@example.com" },
    { name: "sahan", lastName: "Lastname", email: "newsahan@example.com" },
    { name: "kusmi", lastName: "Lastname", email: "newkusmi@example.com" },
    { name: "harini", lastName: "Lastname", email: "newharini@example.com" },
    { name: "Kamala", lastName: "Lastname", email: "kamala@example.com" },
    { name: "Alice", lastName: "Lastname", email: "newalice@example.com" },
    { name: "Bob", lastName: "Lastname", email: "newbob@example.com" },
    { name: "Kamala", lastName: "Lastname", email: "kamala@example.com" },
  ];

  useState(() => {
    setUsers(hardcodedUsers);
  }, []);

  return (
    <Row className="m-5">
      <Col md={10}>
        <h1>Customer List</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Activate/Deactivate</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-x-lg text-danger"></i>
                  )}
                </td>
                <td>
                  {idx === 0 && activeUserId === user._id ? (
                    <Button
                      variant="primary"
                      className="btn-sm"
                      onClick={() => handleDeactivate(user._id)}
                      disabled={loading}
                    >
                      Activate
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="btn-sm"
                      onClick={() => handleActivate(user._id)}
                      disabled={loading}
                    >
                      Deactivate
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default CustomersPageComponent;
