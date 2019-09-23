import React from 'react';
import logo from './logo.svg';

import './App.scss';

import ObjectOrientedButton from './components/ObjectOrientedButton';
import FunctionalButton from './components/FunctionalButton';

import ReactPlayer from 'react-player';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ObjectOrientedButton message="Hello World" />
          <FunctionalButton message="Goodbye World" /> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing
          />
        </header>
      </div>
    );
  }
}

export default App;
