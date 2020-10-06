import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import GameString from '../../../common/GameString/GameString';
import {NavLink} from "react-router-dom";

import './GameModeration.scss';

const GameModeration = (props) => {
    const {games} = props;
    return(
        <section className='moderation__container'>
            <NavLink to={`/back-office`} className="office__button">Назад</NavLink>
            <h2 className='moderation__heading'>Игры в базе:</h2>
            <div className="moderation__wrapper">
                {
                    Array.from(games || [])
                        .sort(
                            (game1, game2) => game2.createdAt.seconds - game1.createdAt.seconds
                        )
                        .slice(0, 8)
                        .map(
                            item => <GameString key={ item.id } id = { item.id } title={ item.title } background={ item.background } category={item.category} developer={item.developer}/>
                        )
                }
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        games: state.firestore.ordered.games
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'games'
    }])
)(GameModeration);
