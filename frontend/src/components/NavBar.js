import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import logo from "../Images/logo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
//import { Link } from "react-router-dom";
//import { IoIosNotifications } from "react-icons/bs";

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link1, Span } from "./StyleElements/NavBarElements.js";


function NavBar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
    window.location.href = '/'
  }
  if (!user) {
    return null;
    
  }
  //  let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <Navbar bg="myNavColor" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} width={50} height={50} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-4 my-lg-2" style={{ maxHeight: "250px" }}>

            <Nav.Link href="Pharmacyhome" style={{ color: "black" }}>
              <Link1>Home<Span className="Ho"></Span></Link1>
            </Nav.Link>

            {/* <Nav.Link style={{ color: "black" }} href="about">
                <Link1>About<Span className="Ho"></Span></Link1>
                </Nav.Link>
             
                <NavDropdown color="black" title="PAGES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Page1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Page2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}

            {/* <Nav.Link style={{ color: "black" }} href="/pages">
                <Link1>Pages<Span className="Ho"></Span></Link1>
                </Nav.Link> */}

            {/* <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Service1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Service2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}

            <Nav.Link style={{ color: "black" }} href={"view-store"}>
              <Link1>Store <span className="Ho"></span></Link1>
            </Nav.Link>

            <Nav.Link style={{ color: "black" }} href="/analysis">
              <Link1>Profit<Span className="Ho"></Span></Link1>
            </Nav.Link>

            <Nav.Link style={{ color: "black" }} href="/contact">
              <Link1>Contact us<Span className="Ho"></Span></Link1>
            </Nav.Link>
          </Nav>



          <p>&ensp;&ensp;</p>

          <Nav.Link href={"Orders"}>
            <NotificationsIcon />
          </Nav.Link>

          <p>&ensp;&ensp;</p>

          <Nav.Link href={"profile"}>
            <AccountCircleIcon />
          </Nav.Link>
         
          {user && (
            <div className="buttons">
              <span>{user.email}</span>
              <button className="btn btn-dark" onClick={handleClick}>
                logout
              </button>
            </div>
          )}
          {/* <Link to={"notification"} className=" ">
                 <img src="../Images/download.png" alt="icon"/>
                 </Link> */}
          {/* <div className="nav-right-part nav-right-part-desktop">
				        <ul>
				          
				          <li><a className="search" href="#"><img src={"../Images/download.png"} alt="icon" /></a></li>
				          <li className="menu-bar dropdown-menu-btn"><i className="fa fa-bars" /></li>
				        </ul>
				      </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;