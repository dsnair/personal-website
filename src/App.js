import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
// import Nav from "./components/Nav";
import Home from "./components/Home";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
        <div>
          <Home />
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/background" component={Background} />
            <Route exact path="/contact" component={Contact} />
          </Switch> */}
          <Background />
          <Contact />
          <Footer />
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;
