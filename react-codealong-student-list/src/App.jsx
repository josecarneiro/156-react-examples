import React from 'react';
import './App.scss';

import students from './students';

import Navbar from 'react-bootstrap/Navbar';
import StudentList from './components/StudentList';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Iron Student List</Navbar.Brand>
      </Navbar>
      <Container>
        <StudentList students={students} />
      </Container>
    </div>
  );
}

export default App;
