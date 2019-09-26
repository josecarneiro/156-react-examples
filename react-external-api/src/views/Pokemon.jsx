import React, { Component } from "react";

import { load } from "./../services/pokemon-api";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokemon: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    return {
      ...state,
      id
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id || !this.state.pokemon) {
      const id = this.props.match.params.id;
      load(id)
        .then(pokemon => {
          this.setState({
            pokemon
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    const pokemon = this.state.pokemon;
    return (
      pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )
    );
  }
}
