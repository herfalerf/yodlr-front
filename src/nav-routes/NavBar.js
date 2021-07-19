import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";

function NavBar() {
  return (
    <Navbar className="NavBar navbar-dark bg-dark" expand="md">
      <NavLink exact to="/" className="navbar-brand mb-0 h1">
        Yodlr
      </NavLink>
      <Nav className="ms-auto" navbar>
        <NavLink className="nav-link" exact to="/admin">
          Admin
        </NavLink>
        <NavLink className="nav-link" exact to="/signup">
          Signup
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
