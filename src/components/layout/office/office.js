import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

import { NavLink } from 'react-router-dom';

// import './AuthorBadge.scss';
import './office.scss';
// import CreateGame from "./createGame/CreateGame";


const Office = (props) => {

    const {auth, user, gamePosts} = props;
    const [userState, setUserState] = useState({
        fullName: 'Загружаем...',
        avatar: '',
        email: 'Загружаем...',
        posts: null,
        isAdmin: false,
    });

    useEffect(() => {
        auth && user && gamePosts && setUserState({
            ...userState,
            email: auth.email,
            fullName: user.firstName + ' ' + user.lastName,
            avatar: user.avatar,
            posts: gamePosts.gamePosts,
            isAdmin: user.isAdmin,
        });
        // eslint-disable-next-line
    }, [auth, user, gamePosts])

    // console.log(userState);

    const avatarStyle = {
        background: userState.avatar && `url(${userState.avatar}) no-repeat center top/cover`
    };

    return (
        <div className='mainContainer'>
            <div className="mainWrapper">
                <div className="profile">
                    <div className="profile__avatar" style={avatarStyle}>
                        {/*<label htmlFor="avatar">Загрузить фото</label>*/}
                        {/*<input type="file" id="avatar"/>*/}
                        {/*<input type="file" id="avatar" onChange={this.setAvatar}/>*/}
                    </div>
                    <div className="profile__info">
                        <div> Имя: <br/> <b>{userState.fullName}</b></div>
                        <div> Email:<br/> <b>{userState.email}</b></div>
                    </div>
                </div>

                <div className='buttonsWrapper'>

                    {/*<CreateGame onSave={this.saveGame} onCancel={() => this.hideCreateGameForm()}/>*/}
                    <NavLink to={`/back-office/postCreation`} className="office__button">Написать пост</NavLink>
                    {
                        userState.posts !== null &&
                        <NavLink to={`/back-office/postsModeration`}
                                 className="office__button">
                            Мои посты
                        </NavLink>
                    }
                    <br/>
                    {
                        userState.isAdmin &&
                        <NavLink to={`/back-office/gamesModeration`}
                                 className="office__button">
                            Редактировать игры
                        </NavLink>
                    }

                </div>
            </div>
        </div>
    )

};

const populates = [
    { child: 'authorId', root: 'users', childAlias: 'author' }
];


const mapStateToProps = (state) => {
    const user = state.firebase.profile;
    const gamePosts = state.firestore.composite;
    return {
        auth: state.firebase.auth,
        gamePosts,
        user
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'users',
            doc: props.uid,
            storeAs: 'user'
        },
        {
            collection: 'posts',
            where: [
                'authorId',
                '==',
                props.auth.uid
            ],
            populates,
            storeAs: 'gamePosts'
        }
    ])
)(Office);

