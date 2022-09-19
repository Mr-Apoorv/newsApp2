import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  name = "john";
  render() {
    return <div>Hello class based component {this.name}</div>;
  }
}
