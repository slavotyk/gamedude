import React from 'react';
import { connect } from 'react-redux';
import CreateGame from "./createGame/CreateGame";

import './office.scss';

const Office = (props) => {
    const {profile, auth} = props;
    return(
        <div className='mainContainer'>
            <div className='mainWrapper office'>
                {/*   Основной контент располагать ниже   */}
                <h1>Личный кабинет</h1>
                <div className="profile">
                    <div className="profile__avatar"></div>
                    <div className="profile__info">
                        <div> <b>Имя пользователя:</b> {profile.firstName} {profile.lastName} </div>
                        <div> <b>Email:</b> {auth.email}</div>
                    </div>
                </div>
                <p>*В этом разделе можно добавить возможность измеенять информацию профиля*</p>

                <h2>Добавить игру</h2>

                <p>*Люди, которым дан доступ к добавлению игр, могут добавлять в этом разделе игры*</p>

                <CreateGame/>

            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    };
}

export default connect(mapStateToProps)(Office);
