import React from 'react';
import HotLinks from './HotLinks/hotLinks';
import GameLast from './GameLast/GameLast';
import news from './GameLast/mock/news.json';

const GamePage = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                {/*   Основной контент располагать ниже   */}

                <h1>Game Name</h1>

                <HotLinks/>

                <GameLast items={ news }/>
            </div>
        </div>
    );
};

export default GamePage;
