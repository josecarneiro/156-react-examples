import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import HomeView from "./views/Home";
import PokemonView from "./views/Pokemon";

import "./App.scss";

import { list } from "./services/pokemon-api";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: []
    };
  }

  componentDidMount() {
    list()
      .then(pokemonList => {
        this.setState({
          pokemonList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Row>
            <Col>
              <Navigation pokemonList={this.state.pokemonList} />
            </Col>
            <Col>
              <Switch>
                <Route path="/" exact component={HomeView} />
                <Route
                  path="/pokemon/:id"
                  render={props => (
                    <PokemonView {...props} message="Hello world!" />
                  )}
                />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
