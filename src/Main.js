import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  mainContent(navItem) {
    switch (navItem) {
      case "background":
        return <main>background</main>;
      case "contact":
        return <main>contact</main>;
      default:
        return (
          <main className="home">
            <header>
              <h1>
                I<span className="lime">'</span>m <br />
                Divya Nair<span className="lime">.</span>
              </h1>
            </header>
            <h2>
              Front-end Engineer <span className="lime">&amp;</span> <br />
              Data Scientist
            </h2>
          </main>
        );
    }
  }
  render() {
    const navItem = this.props.navItem;
    return <React.Fragment>{this.mainContent(navItem)}</React.Fragment>;
  }
}

export default Main;
