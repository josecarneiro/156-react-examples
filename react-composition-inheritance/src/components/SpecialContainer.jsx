import React, { Component } from "react";

import "./SpecialContainer.css";

export default class SpecialContainer extends Component {
  render() {
    return <div className="special-container">{this.props.children}</div>;
  }
}
