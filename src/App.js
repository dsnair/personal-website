import React, { Component } from "react";

import "./index.css";
import Home from "./components/Home";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <Background />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
