import React from 'react';

import Herotext from './herotext';
// import MainFreshGames from "./MainFreshGames/mainFreshGames";
import MainLastPosts from './MainLastPosts/MainLastPosts';

const Landing = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                <Herotext/>
                <MainLastPosts/>
                {/*<MainFreshGames/>*/}
            </div>
        </div>
    );
};

export default Landing;
