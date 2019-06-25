import React from 'react';
import CreateGame from "./createGame/CreateGame";

const Office = () => {
    return(
        <div className='mainContainer'>
            <div className='mainWrapper'>
                {/*   Основной контент располагать ниже   */}

                <h1>Личный кабинет</h1>

                <h2>Информация профиля</h2>

                <p>В этом разделе можно добавить возможность измеенять информацию профиля</p>

                <h2>Добавить игру</h2>

                <p>Люди, которым дан доступ к добавлению игр, могут добовлять в этом разделе игры</p>

                <hr/>

                <CreateGame/>

            </div>
        </div>
    );
};

export default Office;
