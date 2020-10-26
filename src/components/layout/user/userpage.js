import React, { useEffect, useState} from 'react';

import { connect } from 'react-redux';
import { firestoreConnect, populate } from 'react-redux-firebase';
import { compose } from 'redux';

import './userpage.scss';
import PostOnUserPage from "../../common/PostOnUserPage/PostOnUserPage";

const UserPage = (props) => {
    const { user, posts } = props;

    const [userState, setUserState] = useState({
        fullName: 'Загружаем...',
        avatar: '',
        posts: null,
    });
    const [userStats, setUserStats] = useState({
        numberOfPosts: ''
    });
    // getting User Data
    useEffect( () => {
        if (user && posts) {
            setUserState({
                ...userState,
                fullName: user.firstName + ' ' + user.lastName,
                avatar: user.avatar,
                posts: Object.entries({...posts}),
            });
        }
        // eslint-disable-next-line
    }, [user, posts]);

    useEffect(() => {
        if (userState.posts !== null) {
            setUserStats({
                    ...userStats,
                    numberOfPosts: userState.posts.length,
                }
            )
        }
        // eslint-disable-next-line
    }, [userState.posts]);

    return (
        <section className='userWrapper'>
            <section className='userWrapper_profile'>
                <img className='userWrapper_avatar' alt={userState.fullName} src={userState.avatar}/>
                <h1>
                    {userState.fullName}
                </h1>
                <section className='userWrapper_stats'>
                    <span className='userWrapper_stats_posts'>
                         Публикаций: {userStats.numberOfPosts}
                    </span>
                </section>
            </section>

            <section className='userWrapper_posts'>
                <h2>
                    Посты
                </h2>
                <section className='userWrapper_feed'>
                    {
                        Array.from(userState.posts || [])
                            .sort(
                                (post1, post2) => post2['1'].createdAt.seconds - post1[1].createdAt.seconds
                            )
                            // .slice(0, 20)
                            .map(
                                item => <PostOnUserPage key={ item[0] } id={ item[0] } title={item[1].title} poster={item[1].background} author={item[1].author && `${item[1].author.firstName} ${item[1].author.lastName}`} avatar={item[1].author && item[1].author.avatar}/>
                            )
                    }
                </section>
            </section>
        </section>
    )

};

const populates = [
    { child: 'authorId', root: 'users', childAlias: 'author' }
];

const mapStateToProps = (state) => {
    const { user } = state.firestore.data;

    return {
        user,
        posts: populate(state.firestore, 'gamePosts', populates),
        auth: state.firebase.auth,
        state
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'users',
            doc: props.match.params.id,
            storeAs: 'user'
        },
        {
            collection: 'posts',
            where: [
                'authorId',
                '==',
                props.match.params.id
            ],
            populates,
            storeAs: 'gamePosts'
        }
    ])
)(UserPage);

