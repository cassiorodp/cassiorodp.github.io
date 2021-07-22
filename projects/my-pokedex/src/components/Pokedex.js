import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <main>
        <h1>Pokedex</h1>
        <div className = 'pokedex'>
        {pokemons.map(pokemon => <Pokemon key = {pokemon.id}  pokemonsInfo = {pokemon}/>)}
        </div>
      </main>
    )
  }
}

export default Pokedex