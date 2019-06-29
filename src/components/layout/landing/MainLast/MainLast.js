import React from 'react';

import Article from '../../../common/Article/Article';

import './MainLast.scss';

export const MainLast = ({ items=[] }) => {
    if (items.length) {
        return (
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
    }
    else {
        return (
            <section>
                <h2>Последние публикации</h2>
                <p>публикаций нет</p>
            </section>
        );
    }
};

export default MainLast;
