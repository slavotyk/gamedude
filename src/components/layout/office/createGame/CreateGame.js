import React, { Component } from 'react';

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
        const newGame = this.state;
        const { onSave } = this.props;

        onSave(newGame);
    };


    render() {
        const { onCancel } = this.props;
        return (
            <section>
                <form onSubmit={this.handleSubmit} className="create-game-form">
                    <div>
                        <label htmlFor="title">Game Title*</label>
                        <input type="text" id='title' className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="developer">Game Developer*</label>
                        <input type="text" id="developer" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="category">Game Category*</label>
                        <input type="text" id="category" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="keywords">Keywords*</label>
                        <input type="text" id="keywords" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="poster">Game Poster*</label>
                        <input type="file" id="poster" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="pictureStyle">Game Style (link)</label>
                        <input type="text" id="pictureStyle" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkWeb">official WebPage*</label>
                        <input type="text" id="linkWeb" className="create-game-form__input" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="linkForum">official (or biggest) Forum</label>
                        <input type="text" id="linkForum" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkWiki">Wikipedia page*</label>
                        <input type="text" id="linkWiki" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkVk">VK.com page</label>
                        <input type="text" id="linkVk" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkYouTube">YouTube page</label>
                        <input type="text" id="linkYouTube" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkTwitter">Twitter page</label>
                        <input type="text" id="linkTwitter" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkFacebook">Facebook page</label>
                        <input type="text" id="linkFacebook" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkInst">Instagram page</label>
                        <input type="text" id="linkInst" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkTwitch">Twitch page</label>
                        <input type="text" id="linkTwitch" className="create-game-form__input" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit" className="office__button" value="Добавить"/>
                        <button className="office__button" onClick={ onCancel }>Отменить</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default CreateGame;
