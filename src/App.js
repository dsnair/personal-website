import React, { Component } from "react";

import "./index.css";
import Home from "./Home/Home";
import Background from "./Background/Background";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

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
