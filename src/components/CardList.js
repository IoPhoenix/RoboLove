import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardsArray = robots.map(user => {
        return (
            <Card
             key={user.id} 
             id={user.id}
             name={user.name}
             email={user.email}
            />
        );
    });

    return (
        <div className='flex flex-column flex-wrap justify-center items-center flex-row-ns'>
            {cardsArray}
        </div>
    );
}

export default CardList;