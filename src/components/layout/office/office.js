import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../../store/actions/gameActions';
import { createPost } from '../../../store/actions/postActions';
import { updateAvatar } from '../../../store/actions/authActions';
import {NavLink, Redirect} from 'react-router-dom';

import CreateGame from './createGame/CreateGame';
import CreatePost from './CreatePost/CreatePost';
import ModalWindow from '../../common/modalWindow/ModalWindow';

import './office.scss';



class Office extends Component {

    state = {
        showCreateGameForm: false,
        showCreatePost: false,
        showGameModeration: false,
        modal: null
    };


    showCreatePost = () => {
        this.setState({ showCreatePost: true });
    }

    hideCreatePost = () => {
        this.setState({ showCreatePost: false });
    }

    showCreateGameForm = () => {
        this.setState({ showCreateGameForm: true });
    }

    hideCreateGameForm = () => {
        this.setState({ showCreateGameForm: false });
    }

    hideModal = () => this.setState({ modal: null });


    setAvatar = (e) =>{
        const { auth, updateAvatar } = this.props;
        const { uid } = auth;

        updateAvatar(uid, e.target.files[0]);
    }

    showError() {
        this.setState({
            modal: {
                title: 'Ошибка',
                content: 'Поля, отмеченные звездочкой, обязательны для заполнения!!!',
                buttons: [
                    {
                        label: "OK",
                        onClick: this.hideModal
                    }
                ]
            }
        });
    }

    showSuccess(gameTitle) {
        this.setState({
            modal: {
                title: `Игра ${gameTitle}`,
                content: 'успешно добавлена в базу данных',
                buttons: [
                    {
                        label: "Добавить ещё",
                        onClick: ()=> {
                            this.hideModal();
                            this.showCreateGameForm();
                        }
                    },
                    {
                        label: "Готово",
                        onClick: this.hideModal
                    }
                ]
            }
        });
    }

    showSuccessPost({title}) {

        this.setState({
            modal: {
                title: `${title}"`,
                content: `Успешно опубликован`,
                buttons: [
                    {
                        label: "ДОБАВИТЬ ЕЩЕ",
                        onClick: ()=> {
                            this.hideModal();
                            this.showCreatePost();
                        }
                    },
                    {
                        label: "ОТМЕНА",
                        onClick: this.hideModal
                    }
                ]
            }
        });
    }


    saveGame = (newGame) => {
        if (!(newGame.title && newGame.poster)) {
            return this.showError();
        }

        this.props.createGame(newGame);
        this.hideCreateGameForm();
        this.showSuccess(newGame.title);
    }

    savePost = (newPost) => {
        this.props.createPost(newPost);
        this.showSuccessPost(newPost);
        this.hideCreatePost();
    }

    render(){
        const {profile, auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin' />;
        const avatarStyle = {
            background: profile.avatar && `url(${profile.avatar}) no-repeat center top/cover`
        };

        return(
            <div className='mainContainer'>
                <div className='mainWrapper'>
                    <div className="profile">
                        <div className="profile__avatar" style={avatarStyle}>
                            <label htmlFor="avatar">Загрузить фото</label>
                            <input type="file" id="avatar" onChange={this.setAvatar}/>
                        </div>
                        <div className="profile__info">
                            <div> Имя <br/> <b>{profile.firstName} {profile.lastName}</b> </div>
                            <div> Email:<br/> <b>{auth.email}</b></div>
                        </div>
                    </div>
                    <div className='buttonsWrapper'>
                    { this.state.showCreateGameForm === false ? <button className="office__button" onClick = {() => this.showCreateGameForm()}>Добавить игру</button> : <CreateGame onSave={ this.saveGame } onCancel={() => this.hideCreateGameForm()}/>}

                    { this.state.showCreatePost === false ? <button className="office__button" onClick = {() => this.showCreatePost()}>Написть пост</button> : <CreatePost onSave={ this.savePost } onCancel={() => this.hideCreatePost()}/>}

                    { profile.isAdmin && <NavLink to={`/back-office/gamesModeration`} className="office__button">Редактировать список игр</NavLink> }

                    </div>
                    { this.state.modal && <ModalWindow { ...this.state.modal }/> }
                </div>
            </div>
        )
    };
};

function mapStateToProps(state) {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    };
}

export default connect(mapStateToProps, {createGame, createPost, updateAvatar})(Office);
