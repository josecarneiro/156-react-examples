import React, { Component } from "react";

import "./Button.css";

import classnames from "classnames";

export default class Button extends Component {
  render() {
    return (
      <button className={classnames("basic-button", this.props.className)}>
        {this.props.icon} {this.props.message}
      </button>
    );
  }
}
