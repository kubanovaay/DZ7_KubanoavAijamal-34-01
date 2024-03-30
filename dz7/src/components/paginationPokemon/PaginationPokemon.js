import React from 'react';
import classes from './PaginationPokemon.module.sass';


const PaginationPokemon = ({ prev, next, page }) => {
    console.log(prev, 'prev');
    return (
        <div className={classes.pagination}>
            <button className={classes.box} onClick={prev}>Prev</button>
            <p className={classes.box}>{page}</p>
            <button className={classes.box} onClick={next}>Next</button>
        </div>
    );
};

export default PaginationPokemon;