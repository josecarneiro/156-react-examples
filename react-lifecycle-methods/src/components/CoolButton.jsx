import React, { Component } from "react";

export default class CoolButton extends Component {
  constructor(props) {
    super(props);
    console.log("constructor RAN");
    this.state = {
      message: "Cool button"
    };
    this.addCool = this.addCool.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount RAN");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate RAN");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount RAN");
  }

  addCool() {
    this.setState({
      message: this.state.message + " cool"
    });
  }

  render() {
    console.log("render RAN");
    return <button onClick={this.addCool}>{this.state.message}</button>;
  }
}
