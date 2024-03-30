import React, { useEffect, useState } from 'react';
import classes from './PokemonPage.module.sass';
import PokemonList from '../../components/pokemonList/PokemonList';
import PaginationPokemon from '../../components/paginationPokemon/PaginationPokemon';
import PokemonModal from '../../components/pokemonModal/PokemonModal';

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const page = Math.floor(offset / limit) + 1;

    const handlePrev = () => {
        if (offset > 0) return setOffset(prev => prev - limit);
    };

    const handleNext = () => {
        setOffset(prev => prev + limit);
    };

    const getApi = async (offset, limit) => {
        setLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            return data.results;
        } catch (e) {
            console.log('Error', e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getApi(offset, limit).then(pokemons => setPokemonList(pokemons));
    }, [offset, limit]);

    const handlePokemonDetails = (pokemon) => {
        console.log('Selected Pokemon:', pokemon); // Отладочный вывод для проверки данных о выбранном покемоне
        setSelectedPokemon(pokemon);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        console.log('Modal closed');
        setShowModal(false);
    };

    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>Pokemon</p>
            {loading ? 'loading' : <PokemonList pokemonList={pokemonList} onPokemonClick={handlePokemonDetails} />}
            <PaginationPokemon prev={handlePrev} page={page} next={handleNext} />
            {showModal && <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />}
        </div>
    );
};

export default PokemonPage;
