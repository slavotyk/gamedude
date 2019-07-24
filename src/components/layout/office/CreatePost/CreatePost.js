import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import './CreatePost.scss';
import Autocomplete from '../../../common/Autocomplete/Autocomplete';

class CreatePost extends Component {
    state = {
        title: '',
        game: '',
        background: null,
        gameId: '',
        content: ''
    };

    handleChange = (e) => {
        if (e.target.type === 'file') {
            this.setState({
                [e.target.id]: e.target.files[0]
            })
        }
        else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    };

    getSuggestions = value => {
        const { games } = this.props;

        return Object.entries(games)
            .map(
                ([ id, game ]) => ({ ...game, id })
            )
            .filter(
                ({ title }) => title.toLowerCase().includes(value.toLowerCase())
            );
    };

    gameChangeHandler = (gameId, game )=> {
        this.setState({gameId, game });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const newPost = this.state;
        const { onSave } = this.props;

        onSave(newPost);
    };

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit} className="create-post">
                        <input type="text" id="title" className="create-post__input" placeholder="Title" onChange={this.handleChange}/>

                        <Autocomplete getSuggestions={this.getSuggestions} inputClassName={"create-post__input"} placeholder="Game" onChange={ this.gameChangeHandler } />

                        <input type="file" id="background"  className="create-post__input" placeholder="Background" onChange={this.handleChange}/>

                        <textarea rows="20" id="content" className="create-post__textarea" placeholder="Content" onChange={this.handleChange}/>

                        <input type="submit" className="office__button" value="ОПУБЛИКОВАТЬ" onClick={this.handleSubmit}/>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    games: state.firestore.data.games
});

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'games'
    }])
)(CreatePost);
