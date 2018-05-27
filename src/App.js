import React, { Component } from "react";
import Nav from "./Nav";
import Main from "./Main";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(navItem) {
    this.setState({
      navigation: navItem
    });
  }
  render() {
    console.log(this.state.navigation);
    return (
      <React.Fragment>
        <Nav onChange={this.handleChange} />
        <Main navItem={this.state.navigation} />
      </React.Fragment>
    );
  }
}

export default App;
