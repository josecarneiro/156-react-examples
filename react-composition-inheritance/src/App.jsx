import React from "react";
import "./App.css";

import Button from "./components/Button";
import SpecialButton from "./components/SpecialButton";
import SpecialContainer from "./components/SpecialContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button message="I'm a basic button" icon="😎" />
        <SpecialButton message="I'm a basic button" icon="😎" />
        <SpecialContainer>
          <h1>I'm a title inside of a special container</h1>
        </SpecialContainer>
      </header>
    </div>
  );
}

export default App;
