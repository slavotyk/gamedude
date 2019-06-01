import React from 'react';
import Herotext from './herotext';
import MainFresh from "./MainFresh/mainFresh";

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
            </div>
        </div>
    );
};

export default Landing;
