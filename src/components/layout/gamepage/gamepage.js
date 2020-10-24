import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect, populate } from 'react-redux-firebase';
import { compose } from 'redux';

import HotLinks from './HotLinks/hotLinks';
import PostLast from './PostLast/PostLast';
import {Helmet} from "react-helmet";

const GamePage = (props) => {
    const { game, posts } = props;

    if (game) {
        const { background } = game;
        const style={
            background: `linear-gradient(180deg, rgba(34, 34, 34, 0.7) 0%, rgba(34, 34, 34, 0.3) 100%), url(${ background }) no-repeat top center/cover`
        };
        return (
            <>
                <Helmet>
                    <title>{game.title}</title>
                </Helmet>
                <div className='mainContainer'>
                    <div className="gamepage-background" style={style}></div>
                    <div className='mainWrapper'>
                        <h1 className='gamepage-title'>{game.title}</h1>
                        <h4 className='gamepage-description'>Разработчик: {game.developer}</h4>
                        <h4 className='gamepage-description'>Жанр: {game.category}</h4>

                        <HotLinks game={game}/>
                        <PostLast posts={posts}/>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="container center">
                <p>Загружаем...</p>
            </div>
        )
    }
};

const populates = [
    { child: 'authorId', root: 'users', childAlias: 'author' }
];

const mapStateToProps = (state) => {
    const { game } = state.firestore.data;

    return {
        game,
        posts: populate(state.firestore, 'gamePosts', populates),
        auth: state.firebase.auth,
        state
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'games',
            doc: props.match.params.id,
            storeAs: 'game'
        },
        {
            collection: 'posts',
            where: [
                'gameId',
                '==',
                props.match.params.id
            ],
            populates,
            storeAs: 'gamePosts'
        }
    ])
)(GamePage);

