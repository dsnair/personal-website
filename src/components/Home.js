import React, { Component } from "react";
import Nav from "./Nav";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.setState({ menu: false });
  }

  openMenu() {
    this.setState({ menu: true });
  }

  render() {
    return (
      <React.Fragment>
        <Nav menu={this.state.menu} closeMenu={this.closeMenu} />
        <main className="home">
          <i className="fas fa-bars" onClick={() => this.openMenu()} />
          <header>
            <h1>Divya Nair</h1>
            <h2>Front-end Engineer</h2>
          </header>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
