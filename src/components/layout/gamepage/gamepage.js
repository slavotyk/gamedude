import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import HotLinks from './HotLinks/hotLinks';
import GameLast from './GameLast/GameLast';
import news from './GameLast/mock/news.json';

const GamePage = (props) => {
    const { game } = props;
    if (game) {
        const { pictureStyle } = game;
        const style={
            background: `linear-gradient(180deg, rgba(34, 34, 34, 0.7) 0%, rgba(34, 34, 34, 0.3) 100%), url(${ pictureStyle }) no-repeat center top/cover`
        };
        return (
            <div className='mainContainer'>
                <div className="gamepage-background" style={ style }></div>
                <div className='mainWrapper'>
                    <h1>{ game.title }</h1>
                    <h4>Разработчик:  { game.developer }</h4>
                    <h4>Жанр: { game.category }</h4>

                    <HotLinks game={ game }/>

                    <GameLast items={ news }/>
                </div>
            </div>



        )
    } else {
        return (
            <div className="container center">
                <p>Загружаем...</p>
            </div>
        )
    }


};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const games = state.firestore.data.games;
    const game = games ? games[id] : null;
    return {
        game: game,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'games'
    }])
)(GamePage);

