import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { NavLink } from "react-router-dom";

const Headerr = () => {
  return (
    <Navbar expand="lg" className="site-header bg-body-tertiary">
      <div className="inner-header container clearfix">
        <Container>
          <div className="logo">
            <Navbar.Brand href="#home">Company</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto main-navigation text-left hidden-xs hidden-sm">
              {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <a href="#" className="has-submenu">
                    Listing
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="listing-right.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="listing-left.html">Sidebar Left</a>
                    </li>
                    <li>
                      <a href="listing-grid.html">Grids System</a>
                    </li>
                    <li>
                      <a href="single-list.html">Car Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-submenu">
                    Blog
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-right.html">Classic</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Grids System</a>
                    </li>
                    <li>
                      <a href="grid-right.html">Grids Sidebar</a>
                    </li>
                    <li>
                      <a href="single-blog.html">Single Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  );
};

export default Headerr;
{
  /* <li>
  <p>
    <a
      href="#"
      id="example-show"
      className="showLink"
      onclick="showHide('example');return false;"
    >
      <i className="fa fa-search" />
    </a>
  </p>
  <div id="example" className="more">
    <form method="get" id="blog-search" className="blog-search">
      <input
        type="text"
        className="blog-search-field"
        name="s"
        placeholder="Type to search"
        defaultValue
      />
    </form>
  </div>
</li>; */
}
