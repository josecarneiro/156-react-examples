import React, { Component } from "react";
import "./App.css";

import CoolButton from "./components/CoolButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    this.setState({
      active: event.target.checked
    });
  }

  render() {
    return (
      <div className="App">
        <input type="checkbox" onChange={this.toggle} />
        {this.state.active && <CoolButton />}
      </div>
    );
  }
}
