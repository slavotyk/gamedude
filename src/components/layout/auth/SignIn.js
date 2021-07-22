import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

import './Auth.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="mainContainer">
        <div className="mainWrapper">
          <form className="auth-form" onSubmit={this.handleSubmit}>
            <h3>Авторизация</h3>
            <input type="email" className="auth-form__input" placeholder="Email" id='email' onChange={this.handleChange} />
            <input type="password" className="auth-form__input" placeholder="Пароль" id='password' onChange={this.handleChange} />
            <button  className="auth-form__button">ВОЙТИ</button>
            <div>
              { authError ? <p className="auth-form__error">{authError}</p> : null }
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
