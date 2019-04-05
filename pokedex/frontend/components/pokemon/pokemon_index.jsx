import React from 'react';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      this.props.pokemon.map(pokemon => <li key={ pokemon.id }><img width="20px" height="20px" src={pokemon.image_url} alt="Pokemon"/>{pokemon.name}</li>)
    )
  }
}