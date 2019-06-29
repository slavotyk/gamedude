import React from 'react';

import SearchBar from './SearchBar/SearchBar'
import Herotext from './herotext';
import MainFresh from "./MainFresh/mainFresh";
import MainLast from './MainLast/MainLast';
import news from './MainLast/mock/news.json';

const Landing = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                <Herotext/>
                <SearchBar/>
                <MainFresh/>
                <MainLast items={ news }/>
            </div>
        </div>
    );
};

export default Landing;
