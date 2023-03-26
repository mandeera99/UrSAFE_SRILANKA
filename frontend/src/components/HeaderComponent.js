import { Navbar,Nav,NavDropdown ,Container,Badge,Button,Form,DropdownButton,Dropdown, InputGroup} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

//
function HeaderComponent  () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
          <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
            <Form.Control type="text" placeholder="Search in shop .."/>
            <Button variant="warning">
            <i className="bi bi-search text-dark"></i>
            </Button>
            </InputGroup>
            </Nav>
            <Nav>
              {/* create links in navbar */}
              <LinkContainer to="/admin/news">
              <Nav.Link >admin</Nav.Link>
              </LinkContainer>




            <Nav.Link href="/dashboard">Dashboard</Nav.Link>


            <Nav.Link href="#pricing">
            <Badge pill bg="danger">
                 2
            </Badge>
                
                
                CART
            </Nav.Link>

            <Nav.Link href="#pricing">
            <Badge bg="success">
                 4
            </Badge>
              compeleted</Nav.Link>



            <NavDropdown title="John Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item evenKey={Link} to="/user/my-orders">My Order</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default HeaderComponent;