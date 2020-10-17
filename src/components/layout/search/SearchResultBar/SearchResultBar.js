import React from 'react';
import { connect } from 'react-redux';

import './SearchResultBar.scss';
import GameString from "../../../common/GameString/GameString";

export const SearchResultBar = ({ items = [] }) => {
    if (items.length) {
        console.log(items)
        return (
            <section className='givingSpaceAbove'>
                <div className='searchResultBar'>
                {
                    (items || []).map(
                        item => <GameString key={ item.id } id = { item.id } title={ item.title } background={ item.background } category={item.category} developer={item.developer}/>
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
