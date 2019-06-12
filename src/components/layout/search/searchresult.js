import React from 'react';
import SearchResultBar from './SearchResultBar/SearchResultBar';
import games from './mock/games.js'

const SearchResult = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                <SearchResultBar items={ games }/>
            </div>
        </div>
    );
};

export default SearchResult;
