import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <NavLink
            exact
            to="/"
            className="unselected"
            activeClassName="selected"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/background"
            className="unselected"
            activeClassName="selected"
          >
            Background
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="unselected"
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
