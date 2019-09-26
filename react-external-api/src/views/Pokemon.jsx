import React, { Component } from "react";

import { load } from "./../services/pokemon-api";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   const id = props.match.params.id;
  //   return {
  //     ...state,
  //     id
  //   };
  // }

  componentDidUpdate(prevProps, prevState) {
    const id = this.props.match.params.id;
    if (prevProps.match.params.id !== id || !this.state.pokemon) {
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
