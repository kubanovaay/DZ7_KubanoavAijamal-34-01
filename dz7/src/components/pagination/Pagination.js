import React from 'react';
import classes from './Pagination.module.sass';
import Button from '../button/Button';


const Pagination = ({prev, next, page}) => {
    return (
        <div className={classes.pagination}>
            <Button action={prev} title={'prev'}/>
            <p>{page}</p>
            <Button action={next} title={'next'}/>
        </div>
    );
};

export default Pagination;