import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  handleClick(navItem) {
    this.props.onChange(navItem);
  }
  render() {
    return (
      <nav>
        <div>
          <button className="lime" onClick={() => this.handleClick("home")}>
            Home
          </button>
          <button onClick={() => this.handleClick("background")}>
            Background
          </button>
          <button onClick={() => this.handleClick("contact")}>Contact</button>
        </div>
      </nav>
    );
  }
}

export default Nav;
