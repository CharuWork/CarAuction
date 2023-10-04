import React, { useState } from "react";
// import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header className="site-header">
        <div id="main-header" className="main-header header-sticky">
          <div className="inner-header container clearfix">
            <div className="logo">
              <a href="index.html">Logo</a>
            </div>

            <nav
              className={`main-navigation text-left more ${
                menuVisible ? "" : "hidden"
              }`}
            >
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
            </nav>
            <div>
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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
