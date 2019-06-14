import React from 'react';
import SearchResultBar from './SearchResultBar/SearchResultBar';
import SearchBar from '../landing/SearchBar/SearchBar';

const SearchResult = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                <SearchBar />
                <SearchResultBar />
            </div>
        </div>
    );
};

export default SearchResult;
