import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../../../store/actions/gameActions';
import { Redirect } from 'react-router-dom';

import './CreateGame.scss';
class CreateGame extends Component {
    state = {
        title: '',
        developer: '',
        category: '',
        keywords: '',
        poster: '',
        pictureStyle: '',
        linkWeb: '',
        linkForum: '',
        linkWiki: '',
        linkVk: '',
        linkYouTube: '',
        linkTwitter: '',
        linkFacebook: '',
        linkInst: '',
        linkTwitch: ''
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

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createGame(this.state);
        alert("Игра добавлена")
        // после добавления игры - нужно нативно отреагировать, а-ля убрать форму и сказать "добавлено - хотите добавить еще?"
    };
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="create-game-form">
                    <div>
                        <label htmlFor="title">Game Title</label>
                        <input type="text" id='title' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="developer">Game Developer</label>
                        <input type="text" id="developer" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="category">Game Category</label>
                        <input type="text" id="category" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="keywords">Keywords</label>
                        <input type="text" id="keywords" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="poster">Game Poster</label>
                        <input type="file" id="poster" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="pictureStyle">Game Style (link)</label>
                        <input type="text" id="pictureStyle" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkWeb">official WebPage</label>
                        <input type="text" id="linkWeb" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="linkForum">official (or biggest) Forum</label>
                        <input type="text" id="linkForum" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkWiki">Wikipedia page</label>
                        <input type="text" id="linkWiki" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkVk">VK.com page</label>
                        <input type="text" id="linkVk" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkYouTube">YouTube page</label>
                        <input type="text" id="linkYouTube" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkTwitter">Twitter page</label>
                        <input type="text" id="linkTwitter" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkFacebook">Facebook page</label>
                        <input type="text" id="linkFacebook" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkInst">Instagram page</label>
                        <input type="text" id="linkInst" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkTwitch">Twitch page</label>
                        <input type="text" id="linkTwitch" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className="create-game-form__button">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createGame: (game) => dispatch(createGame(game))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)
