import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/dsnair">
          <i className="fab fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/dsnair/">
          <i className="fab fa-linkedin" />
        </a>
        <a href="mailto:nowhere@gmail.com">
          <i className="fas fa-envelope" />
        </a>
      </footer>
    );
  }
}

export default Footer;
