import React, { Component } from 'react';

// In node we would do the same like this
// const React = require('react');
// const Component = React.Component;

import StudentItem from './StudentItem';

export default class StudentList extends Component {
  render() {
    const students = this.props.students;
    return (
      <div>
        {students.map(student => (
          <StudentItem student={student} />
        ))}
      </div>
    );
  }
}
