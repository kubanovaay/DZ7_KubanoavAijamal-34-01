import React from 'react';
import classes from './PokemonList.module.sass';
import Pokemon from '../pokemon/Pokemon';

const PokemonList = ({ pokemonList, onPokemonClick }) => {
    const handlePokemonClick = (pokemon) => {
        onPokemonClick(pokemon);
    };

    return (
        <ul className={classes.list}>
            {pokemonList.map(pokemon => (
                <Pokemon key={pokemon.name} pokemon={pokemon} onClick={handlePokemonClick} />
            ))}
        </ul>
    );
};

export default PokemonList;
