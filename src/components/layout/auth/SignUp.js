import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import createUser from '../../../store/actions/signUpAction';
import RecaptchaComponent from "../../common/ReCaptcha/Recaptcha";
import './Auth.scss';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [routeRedirect, setRedirect] = useState(false);
  const dispatch = useDispatch();


  const createUserAction = (email, password) => dispatch(createUser(email, password));


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('createdUser');
    if(email !== "" && password !== ""){
      await createUserAction(email, password);
      setRedirect(true);
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
          <h3>Регистрация</h3>
          <input type="email" className="auth-form__input" placeholder="Email" id='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="auth-form__input" placeholder="Пароль" id='password' onChange={(e) => setPassword(e.target.value)} />
          <RecaptchaComponent/>
          <button className="auth-form__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
