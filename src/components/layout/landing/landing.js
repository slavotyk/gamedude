import React from 'react';
import Herotext from './herotext';

const Landing = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                {/*   Основной контент располагать ниже   */}
                <Herotext/>

                {/*  Нужен компонент SearchBar  */}

                {/*  Нужен компонент MainFresh  */}

                {/*  Нужен компонент MainLast */}
            </div>
        </div>
    );
};

export default Landing;
