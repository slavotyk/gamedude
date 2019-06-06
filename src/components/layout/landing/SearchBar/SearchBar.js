import React from 'react';
import './SearchBar.scss';

const SearchBar = () => (
    <div className='searchBar'>
        <input className='searchInput' placeholder='Что ищешь, странник?'/>
        <a className='searchIcon' href='#'></a>
    </div>
)

export default SearchBar;