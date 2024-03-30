import React, { useState, useEffect } from 'react';
import classes from './Pokemon.module.sass';

const Pokemon = ({ pokemon, onClick }) => {
    const [loading, setLoading] = useState(false);
    const [pokemonOne, setPokemonOne] = useState({});

    const getApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log('Error', e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getApi();
            setPokemonOne(data);
        };

        fetchData();
    }, []);

    const handlePokemonClick = () => {
        onClick(pokemonOne); // Вызываем переданную функцию onClick и передаем информацию о покемоне
    };

    return (
        <li className={classes.pokemonItem}>
            {loading ? (
                'loading'
            ) : (
                <div className={classes.pokemonItem_info}>
                    <img
                        src={pokemonOne?.sprites?.other?.dream_world?.front_default}
                        alt="pokemon"
                        className={classes.img}
                    />
                    <p className={classes.name}>{pokemon.name}</p>
                </div>
            )}

            <button className={classes.btn} onClick={handlePokemonClick}>Подробнее</button> {/* Добавляем обработчик события onClick */}
        </li>
    );
};

export default Pokemon;
