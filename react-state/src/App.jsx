import React, { Component } from "react";
import "./App.css";

import Person from "./components/Person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "José",
        age: 26,
        profession: "LT WD IH"
      }
    };
    this.growUp = this.growUp.bind(this);
  }

  growUp() {
    // We cannot mutate state directly!
    // This does not work:
    // this.state.person.age = this.state.person.age + 1;
    // this.state.person.age++;

    // We need to call this.setState({ ... }) with the new state object
    this.setState({
      person: {
        ...this.state.person,
        age: this.state.person.age + 1
      }
    });
  }

  render() {
    const person = this.state.person;

    return (
      <div className="App">
        <h1>{person.name}</h1>
        <h3>{person.profession}</h3>
        <h4>{person.age}</h4>
        <button onClick={this.growUp}>Grow up</button>
        <Person person={person} />
      </div>
    );
  }
}

export default App;
