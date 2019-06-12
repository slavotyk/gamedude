import React from 'react';

import Article from '../../../common/Article/Article';

import './GameLast.scss';

const GameLast = ({ items }) => (
    <section>
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
