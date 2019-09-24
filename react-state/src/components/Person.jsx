import React, { Component } from "react";

export default class Person extends Component {
  render() {
    const person = this.props.person;
    return (
      <span>
        My name is {person.name}, I am {person.age} years old, and I work as a{" "}
        {person.profession}.
      </span>
    );
  }
}
