import React from 'react';

import './App.scss';

class App extends React.Component {
  render() {
    // const user = {
    //   name: 'José',
    //   role: 'user'
    // };
    const user = {
      name: 'Sonia',
      role: 'editor'
    };

    const isAdmin = user.role === 'admin';
    const isJose = user.name === 'José';

    const students = ['Beni', 'Paula', 'Brandy', 'Elyas'];

    return (
      <div className="App">
        <header className="App-header">
          {/*
            CONDITIONAL RENDERING
            by short-circuiting
          */}
          {((isAdmin || isJose) && (
            <button>Edit the document in the database and not here</button>
          )) || (
            <button>Cannot edit. Sorry that you dont have priveleges!</button>
          )}
          {/*
            ITERATION
          */}
          <ul>
            {students.map(student => (
              <li>{student}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
