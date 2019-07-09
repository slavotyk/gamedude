import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../../store/actions/gameActions';
import { Redirect } from 'react-router-dom';

import CreateGame from './createGame/CreateGame';
import ModalWindow from '../../common/modalWindow/ModalWindow';

import './office.scss';

class Office extends Component {

    state = {
        showCreateGameForm: false,
        modal: null
    };

    showCreateGameForm = () => {
        this.setState({ showCreateGameForm: true });
    }

    hideCreateGameForm = () => {
        this.setState({ showCreateGameForm: false });
    }

    hideModal = () => this.setState({ modal: null });

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
                        label: "ДОБАВИТЬ ЕЩЕ",
                        onClick: ()=> {
                            this.hideModal();
                            this.showCreateGameForm();
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

    render(){
        const {profile, auth} = this.props;
        if (!auth.uid) return <Redirect to='/signin' />;

        return(
            <div className='mainContainer'>
                <div className='mainWrapper'>
                    <h1>Мой профиль</h1>
                    <div className="profile">
                        <div className="profile__avatar"></div>
                        <div className="profile__info">
                            <div> <b>Имя:</b> {profile.firstName} {profile.lastName} </div>
                            <div> <b>Email:</b> {auth.email}</div>
                        </div>
                    </div>

                    {this.state.showCreateGameForm === false ? <button className="office__button" onClick = {() => this.showCreateGameForm()}>ДOБАВИТЬ НОВУЮ ИГРУ</button> : <CreateGame onSave={ this.saveGame } onCancel={() => this.hideCreateGameForm()}/>}

                    { this.state.modal && <ModalWindow { ...this.state.modal } /> }
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

export default connect(mapStateToProps, {createGame})(Office);
