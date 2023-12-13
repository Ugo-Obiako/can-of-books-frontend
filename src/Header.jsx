import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
