import React, { Component } from "react";

import projects from "./../projects";

export default class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  // For our class component view to be reactive to changes in params
  // we will not be able to use componentDidMount
  // componentDidMount() {
  //   const id = this.props.match.params.id;
  //   const project = projects.find(item => item.id === id);
  //   this.setState({
  //     project
  //   });
  // }

  // To update my state whenever my props change, I will need to do this
  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const project = projects.find(item => item.id === id);
    return {
      ...state,
      project
    };
  }

  render() {
    const project = this.state.project;

    return (
      (project && (
        <div>
          <h1>Project Page for {project.name}</h1>
          <p>Description: {project.description}</p>
          <p>Year: {project.year}</p>
          <p>Technologies: {project.technologies}</p>
        </div>
      )) || (
        <div>
          <p>Project loading...</p>
        </div>
      )
    );
  }
}
