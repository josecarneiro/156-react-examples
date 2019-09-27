import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BlogNavbar from "./components/BlogNavbar";

import ListView from "./views/List";
import CreateView from "./views/Create";
import PostView from "./views/Post";
import EditView from "./views/Edit";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <BlogNavbar />
          <Switch>
            <Route path="/" exact component={ListView} />
            <Route path="/post/create" component={CreateView} />
            <Route path="/post/:id" exact component={PostView} />
            <Route path="/post/:id/edit" component={EditView} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
