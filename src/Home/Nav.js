import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  handleClick = (id, block) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block });
  };
  render() {
    return (
      <nav
        className={`navbar ${
          this.props.navVisible ? "navbar-open" : "navbar-close"
        }`}
      >
        <i className="fas fa-times" onClick={() => this.props.navStatus()} />
        <a onClick={() => this.handleClick("home", "center")}>Home</a>
        <a onClick={() => this.handleClick("bg", "center")}>Background</a>
        <a onClick={() => this.handleClick("contact", "start")}>Contact</a>
      </nav>
    );
  }
}

export default Nav;
