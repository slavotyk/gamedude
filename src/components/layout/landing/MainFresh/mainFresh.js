import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Article from '../../../common/Article/Article';

const MainFresh = (props) => {
    const {games} = props;
    return(
        <div className='mainFresh'>
            <h2>Свежее</h2>
                <div className="freshWrapper">
                    {
                        (games || []).map(
                            item => <Article key={ item.id } id = { item.id } title={ item.title } poster={ item.poster }/>
                        )
                    }
                        {/* <div className="freshUnit freshUnit_1"
                        data-title="Metro Exodus" data-description="продолжение легендарного шутера...">
                    </div>
                    <div className="freshUnit freshUnit_2"
                        data-title="Dota 2" data-description="ну вы поняли...">
                    </div>
                    <div className="freshUnit freshUnit_3"
                        data-title="Death stranding" data-description="Коджима-гений!...">
                    </div>
                    <div className="freshUnit freshUnit_4"
                        data-title="MTG Arena" data-description="это вам не Harthstone...">
                    </div>
                    <div className="freshUnit freshUnit_4"
                         data-title="MTG Arena" data-description="это вам не Harthstone...">
                    </div>
                    <div className="freshUnit freshUnit_3"
                         data-title="Death stranding" data-description="Коджима-гений!...">
                    </div>
                    <div className="freshUnit freshUnit_1"
                         data-title="Metro Exodus" data-description="продолжение легендарного шутера...">
                    </div>
                    <div className="freshUnit freshUnit_2"
                         data-title="Dota 2" data-description="ну вы поняли...">
                    </div> */}
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
