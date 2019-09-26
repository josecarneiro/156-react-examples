import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NativeRouter as Router, Route, Switch } from "react-router-native";

import HomeView from "./views/Base";
import AboutView from "./views/About";
import PricingView from "./views/Pricing";
import ProjectView from "./views/Project";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/about" component={AboutView} />
          <Route path="/pricing" component={PricingView} />
          <Route path="/project/:id" component={ProjectView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
