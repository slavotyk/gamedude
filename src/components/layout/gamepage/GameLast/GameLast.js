import React from 'react';

import Article from './Article';

import './GameLast.scss';

const GameLast = ({ items }) => (
    <section className='mainLast'>
        <h2>Последние публикации</h2>
        <div className='mainLastWrapper'>
        {
            (items || []).map(
                item => <Article key={ item.id } title={ item.title }/>
            )
        }
        </div>
    </section>
);

export default GameLast;
