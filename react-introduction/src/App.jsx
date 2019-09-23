import React from 'react';
import logo from './logo.svg';

import './App.scss';

import DocumentationAnchor from './components/DocumentationLink';

import ObjectOrientedButton from './components/ObjectOrientedButton';
import FunctionalButton from './components/FunctionalButton';

class App extends React.Component {
  render() {
    const message = 'This is my app';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message}</p>
          <DocumentationAnchor />
          <ObjectOrientedButton />
          <FunctionalButton />
        </header>
      </div>
    );
  }
}

export default App;
