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
        gameId: '',
        background: null,
        coverPrev: null,
        content: null
    };


    // ловим изменения
    handleChange = (e) => {
        // если файл, то добавляем к background
        if (e.target.type === 'file') {
            this.setState({
                [e.target.id]: e.target.files[0]
            });

            // не забываем пилить превью
            const file    = this.refs.uploadImg.files[0];
            const reader  = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    coverPrev: reader.result
                })
            };
            reader.readAsDataURL(file);
            this.setState({
                coverPrev :reader.result
            });
        }
        else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    };

    // Селектор игры
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

    // Изменение игры
    gameChangeHandler = (gameId, game )=> {
        this.setState({gameId, game });
    };

    // Ловим сабмит
    handleSubmit = (e) => {
        e.preventDefault();
        const newPost = this.state;
        const { onSave } = this.props;

        onSave(newPost);
    };

    // Рендерим форму
    render() {
        const { onCancel } = this.props;

        return (
            <section>
                <form onSubmit={this.handleSubmit} className="create-post">

                        <img className='create-post__background'  alt='Не забудьте загрузить фоновое изображение!' src={this.state.coverPrev}/>
                        <div className='create-post__background_gradient'> </div>

                        <input type="text" id="title" className="create-post__input create-post__input_title" placeholder="Заголовок поста" onChange={ this.handleChange }/>

                        <Autocomplete getSuggestions={this.getSuggestions} inputClassName={"create-post__input"} placeholder="Выберите про какую игру ваш пост" onChange={ this.gameChangeHandler } />

                        <input type="file" ref="uploadImg" id="background"  className="create-post__input" placeholder="Загрузите картинку" onChange={this.handleChange}/>

                        <textarea rows="20" id="content" className="create-post__textarea" placeholder="Content" onChange={this.handleChange}/>

                        <input type="submit" className="office__button" value="ОПУБЛИКОВАТЬ" onClick={this.handleSubmit}/>

                        <input type="submit" className="office__button" value="ОТМЕНА" onClick={onCancel}/>
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
