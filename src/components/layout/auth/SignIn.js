import React, { useState} from 'react';
// import { connect } from 'react-redux';
import { useDispatch} from 'react-redux';
import signinUser from '../../../store/actions/signInAction';
import { Redirect } from 'react-router-dom';

import './Auth.scss';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [routeRedirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const signInAction = (email, password) => dispatch(signinUser(email, password));


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('createdUser');
    if(email !== "" && password !== ""){
      let user = await signInAction(email, password);
        if(user){
          setRedirect(true);
        }
    } else {
      console.log('fill credentials');
    }
  }

  const redirectTo = routeRedirect;
  if(redirectTo){
    return <Redirect to='/' />
  }

  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h3>Авторизация</h3>
          <input type="email" className="auth-form__input" placeholder="Email" id='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="auth-form__input" placeholder="Пароль" id='password' onChange={(e) => setPassword(e.target.value)} />
          <button  className="auth-form__button">ВОЙТИ</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
