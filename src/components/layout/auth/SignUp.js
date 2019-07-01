import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../../store/actions/authActions'

import './Auth.scss';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> ;
    return (
      <div className="mainContainer">
        <div className="mainWrapper">
          <form className="auth-form" onSubmit={this.handleSubmit}>
            <h3>Регистрация</h3>
            <input type="text" className="auth-form__input" placeholder="Имя" id='firstName' onChange={this.handleChange} />
            <input type="text" className="auth-form__input" placeholder="Фамилия" id='lastName' onChange={this.handleChange} />
            <input type="email" className="auth-form__input" placeholder="Email" id='email' onChange={this.handleChange} />
            <input type="password" className="auth-form__input" placeholder="Пароль" id='password' onChange={this.handleChange} />
            <button className="auth-form__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
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
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
