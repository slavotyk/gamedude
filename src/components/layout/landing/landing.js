import React from 'react';
import Herotext from './herotext';
import MainFresh from "./MainFresh/mainFresh";
import MainLast from './MainLast/MainLast';
import news from './MainLast/mock/news.json';

const Landing = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                {/*   Основной контент располагать ниже   */}

                {/* Компонент Herotext */}
                <Herotext/>

                {/*  Нужен компонент SearchBar  */}

                {/*  Нужен компонент MainFresh  */}
                <MainFresh/>
                {/*  Нужен компонент MainLast */}
                <MainLast items={ news }/>
            </div>
        </div>
    );
};

export default Landing;
