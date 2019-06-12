import React from 'react';

import Article from '../../../common/Article/Article';

import './SearchResultBar.scss';

const SearchResultBar = ({ items }) => {
    if (items.length !== 0) {
        return (
            <section>
                <h4>По запросу найдено</h4>
                <div className='searchResultBar'>
                {
                    (items || []).map(
                        item => <Article key={ item.id } title={ item.title } poster={ item.poster }/>
                    )
                }
                </div>
            </section>
        );
    }
    else {
        return (
            <h4>Ничего не найдено</h4>
        );
    }
};

export default SearchResultBar;