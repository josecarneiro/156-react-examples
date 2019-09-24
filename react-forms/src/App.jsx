import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "José",
      age: 26,
      profession: "Lead Teacher at Ironhack Lisbon",
      reportsTo: "",
      teamMembers: [
        { id: "alvaro", name: "Álvaro" },
        { id: "goncalo", name: "Gonçalo" },
        { id: "carmen", name: "Carmen" }
      ]
      // search: "",
      // foods: [
      //   {
      //     name: "Pizza",
      //     calories: 400,
      //     image: "https://i.imgur.com/eTmWoAN.png",
      //     quantity: 0
      //   },
      //   {
      //     name: "Salad",
      //     calories: 150,
      //     image: "https://i.imgur.com/DupGBz5.jpg",
      //     quantity: 0
      //   },
      //   {
      //     name: "Sweet Potato",
      //     calories: 120,
      //     image: "https://i.imgur.com/hGraGyR.jpg",
      //     quantity: 0
      //   }
      // ]
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleProfessionChange = this.handleProfessionChange.bind(this);
    this.handleManagerChange = this.handleManagerChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: event.target.valueAsNumber
    });
  }

  handleProfessionChange(event) {
    this.setState({
      profession: event.target.value
    });
  }

  handleManagerChange(event) {
    this.setState({
      reportsTo: event.target.value
    });
  }

  get message() {
    return `Hello, my name is ${this.state.name}, I am ${
      this.state.age
    } years old, I work as a ${this.state.profession} and report to ${this.state
      .reportsTo || "nobody"}.`;
  }

  get selectedFoods() {
    return this.state.foods.filter(food =>
      food.name.includes(this.state.search)
    );
  }

  render() {
    const message = this.message;
    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
            />
          </div>
          <div>
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              value={this.state.profession}
              onChange={this.handleProfessionChange}
            />
          </div>
          <div>
            <label htmlFor="manager">Manager</label>
            <select
              onChange={this.handleManagerChange}
              value={this.state.reportsTo}
            >
              <option disabled value="">
                Select Manager
              </option>
              {this.state.teamMembers.map(member => (
                <option value={member.name} key={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </div>
        </form>
        <p>{message}</p>
      </div>
    );
  }
}

export default App;
