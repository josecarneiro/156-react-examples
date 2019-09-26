import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <nav>
        <Link to="/">Base</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <button onClick={this.increment}>{this.state.count}</button>
      </nav>
    );
  }
}
