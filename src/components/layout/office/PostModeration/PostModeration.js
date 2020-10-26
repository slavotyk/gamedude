import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

import { NavLink } from 'react-router-dom';
// import PostOnUserPage from "../../../common/PostOnUserPage/PostOnUserPage";

// import './AuthorBadge.scss';
import './../../user/userpage.scss';
import PostOnUserPage from "../../../common/PostOnUserPage/PostOnUserPage";
// import PostOnGamePage from "../../gamepage/PostLast/PostOnGamePage/PostOnGamePage";
// import CreateGame from "./createGame/CreateGame";


const PostModeration = (props) => {

    const {auth, user, gamePosts} = props;
    const [userState, setUserState] = useState({
        fullName: 'Загружаем...',
        avatar: '',
        email: 'Загружаем...',
        posts: null,
        isAdmin: false,
        id: ''
    });

    useEffect(() => {
        auth && user && gamePosts && setUserState({
            ...userState,
            email: auth.email,
            fullName: user.firstName + ' ' + user.lastName,
            avatar: user.avatar,
            posts: Object.keys(gamePosts.gamePosts).map((key) => [key, gamePosts.gamePosts[key]]),
            isAdmin: user.isAdmin,
            id: auth.uid,
        });
        // eslint-disable-next-line
    }, [auth, user, gamePosts])

    // console.log(userState)

    return (
        <div className='mainContainer'>
            <div className="userWrapper">
                <NavLink to={`/back-office`} className="office__button">Назад</NavLink>
                <div className="userWrapper_posts">
                    <section className='userWrapper_feed'>
                        {
                            (userState.posts !== null)
                                ?
                                <span>
                                   {
                                       Array.from(userState.posts)
                                           .sort(
                                               (post1, post2) => post2[1].createdAt.seconds - post1[1].createdAt.seconds
                                           )
                                           .map(
                                               item => <PostOnUserPage key={ item[0] } id={ item[0] } userId={userState.id} title={item[1].title} poster={item[1].background} author={item[1].authorId} avatar={item[1].author && item[1].author.avatar}/>
                                       )
                                   }
                                </span>
                                :
                                <span>
                                    Loading...
                                </span>
                        }
                    </section>
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
)(PostModeration);

