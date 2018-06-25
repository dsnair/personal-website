import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Background from "./Background";
import Contact from "./Contact";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/contact" component={Contact} />
      </React.Fragment>
    );
  }
}

export default Main;
