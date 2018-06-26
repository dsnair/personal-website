import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav id="navbar" className={this.props.menu ? "navbar-open" : "navbar-close"}>
        <i className="fas fa-times" onClick={this.props.closeMenu}></i>
        <a href="#home">Home</a>
        <a href="#bg">Background</a>
        <a href="#contact">Contact</a>
      </nav>
    );
  }
}

export default Nav;
