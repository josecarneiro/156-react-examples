import React, { Component } from "react";

import "./ButtonSpecial.css";

import Button from "./Button";

export default class SpecialButton extends Component {
  render() {
    return <Button className="button-special" {...this.props} />;
  }
}
