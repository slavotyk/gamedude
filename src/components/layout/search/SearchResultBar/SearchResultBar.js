import React from 'react';
import { connect } from 'react-redux';

import GameCard from '../../../common/GameCard/GameCard';

import './SearchResultBar.scss';

export const SearchResultBar = ({ items = [] }) => {
    if (items.length) {
        return (
            <section>
                <div className='searchResultBar'>
                {
                    (items || []).map(
                        item => <GameCard key={ item.id } title={ item.title } poster={ item.poster } id={ item.id }/>
                    )
                }
                </div>
            </section>
        );
    }
    else {
        return (
            <section>
                <h4 className='nothing'>Ничего не найдено</h4>
            </section>
        );
    }
};

function mapStateToProps(state) {
    return {
        items: state.search.items
    };
}

export default connect(mapStateToProps)(SearchResultBar);
