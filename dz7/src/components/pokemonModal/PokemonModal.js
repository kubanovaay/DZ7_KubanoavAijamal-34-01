import React from 'react';
import classes from './PokemonModal.module.css';

const PokemonModal = ({ pokemon, onClose, show }) => {
    return (
        <div className={`${classes.modal} ${show ? classes.show : ''}`}>
            <div className={classes.modalContent}>
                <span className={classes.close} onClick={onClose}>&times;</span>
                <div className={classes.pokemonInfo}>
                    <img src={pokemon.sprites?.other?.dream_world?.front_default} alt="pokemon" className={classes.img}/>
                    <div className={classes.details}>
                        <h2>{pokemon.name}</h2>
                        <div className={classes.abilities}>
                            <h3>Abilities:</h3>
                            <p>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                        </div>
                        <div className={classes.stats}>
                            <h3>Stats:</h3>
                            <p>{pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
                        </div>
                        <div className={classes.types}>
                            <h3>Types:</h3>
                            <p>{pokemon.types.map(type => type.type.name).join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;

