import React, { useEffect, useState } from 'react';
import { getApi } from '../../common/api';
import PokemonPage from '../pokemonPage/PokemonPage';


const MainPage = () => {

    const [users,   setUsers ] = useState([]);

    useEffect(() => {
        // getApi('todos').then((data)=> setTasks(data))
        getApi('users').then((data) => setUsers(data));
        // getApi('posts').then((data)=> console.log(data))
    }, []);


    return (
        <>
            {/*<TodoPage/>*/}
            <PokemonPage/>
        </>
    );
};

export default MainPage;