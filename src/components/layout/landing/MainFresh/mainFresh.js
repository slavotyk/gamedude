import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import GameCard from '../../../common/GameCard/GameCard';

const MainFresh = (props) => {
    const {games} = props;
    return(
        <div className='mainFresh'>
            <h2>Свежее</h2>
                <div className="freshWrapper">
                    {
                        Array.from(games || [])
                            .sort(
                                (game1, game2) => game2.createdAt.seconds - game1.createdAt.seconds
                            )
                            .slice(0, 8)
                            .map(
                                item => <GameCard key={ item.id } id = { item.id } title={ item.title } poster={ item.poster }/>
                            )
                    }
                </div>
        </div>
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
)(MainFresh);
