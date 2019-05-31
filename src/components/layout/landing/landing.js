import React from 'react';
import Herotext from './herotext';

const Landing = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                {/*   Основной контент располагать ниже   */}
                <Herotext/>
            </div>
        </div>
    );
};

export default Landing;
