import React from 'react';

import SearchBar from './SearchBar/SearchBar'
import Herotext from './herotext';
import MainFreshGames from "./MainFreshGames/mainFreshGames";
import MainLastPosts from './MainLastPosts/MainLastPosts';

const Landing = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                <Herotext/>
                <SearchBar/>
                <MainFreshGames/>
                <MainLastPosts/>
            </div>
        </div>
    );
};

export default Landing;
