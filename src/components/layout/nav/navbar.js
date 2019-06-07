import React from 'react';
import UserAuth from './Auth/Auth';

const Navbar = () => {
    return(
        <div className='navigationContainer'>
            <div className='navigationWrapper'>
                {/*   Основной контент располагать ниже   */}
                <div className='logo'> </div>

                <UserAuth/>
                {/*  Нужен компонент юзера в навбаре  */}
            </div>
        </div>
    );
};

export default Navbar;
