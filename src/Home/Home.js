import React, { Component } from "react";
import Nav from "./Nav";
import "./Nav.css";
import "./Home.css";

class Home extends Component {
  state = {
    navVisible: false
  };

  navStatus() {
    this.setState({
      navVisible: !this.state.navVisible
    });
  }

  render() {
    return (
      <React.Fragment>
        <Nav
          navVisible={this.state.navVisible}
          navStatus={this.navStatus.bind(this)}
        />
        <section id="home">
          <i className="fas fa-bars" onClick={() => this.navStatus()} />
          <header>
            <h1>Divya Nair</h1>
            <h2>Front-end Engineer</h2>
          </header>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
