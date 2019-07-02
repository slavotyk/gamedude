import React from 'react';
import { connect } from 'react-redux';

import Article from '../../../common/Article/Article';

import './SearchResultBar.scss';

export const SearchResultBar = ({ items = [] }) => {
    if (items.length) {
        return (
            <section>
                <h4>По запросу найдено</h4>
                <div className='searchResultBar'>
                {
                    (items || []).map(
                        item => <Article key={ item.id } title={ item.title } poster={ item.poster } id={ item.id }/>
                    )
                }
                </div>
            </section>
        );
    }
    else {
        return (
            <section>
                <h4>Ничего не найдено</h4>
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
