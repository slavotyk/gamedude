import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';
// import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import SearchBar from './../landing/SearchBar/SearchBar';
import {signOut} from '../../../store/actions/signOutAction';
import firebase from '../../../config/fbConfig';

const Navbar = (props) => {
  const signInSelector = useSelector((state) => state.signIn);
  const signUpSelector = useSelector((state) => state.signUp);
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch;
  const signoutUserAction = () => dispatch(signOut());

  useEffect(() => {
    firebase.getUserState().then(user => {
      setUserState(user);
    });
  })

  const signout = async() => {
    setUserState(null);
    await signoutUserAction();
    props.history.replace('/');
  }

  let links;
  if((signInSelector.user && signInSelector.user.hasOwnProperty('user')) || (signUpSelector.user &&
    signUpSelector.user.hasOwnProperty('user')) || userState !==null) {
      links = (
        <>
          <ul className="authLinksList">
            {/*<li><NavLink to='/create'>Новый Пост</NavLink></li>*/}
            <li><button onClick={signout} className="navigationButton">Выйти</button></li>
            <li><NavLink to='/back-office' className="userAvatar" /></li>
          </ul>
        </>
      )
    } else {
      links = (
        <>
          <ul className="authLinksList">
            <li><NavLink to='/signin'>Войти</NavLink></li>
            <li><NavLink to='/signup' className='button'>Зарегистрироваться</NavLink></li>
          </ul>
        </>
      )
    }

    return (
      <>
        <header className="navigationContainer" itemScope itemType="https://schema.org/WPHeader">
            <nav className="navigationWrapper" itemScope itemType="https://schema.org/SiteNavigationElement">

                <NavLink to='/' className='logo'> </NavLink>
                <SearchBar/>
                <div className="userAuth">
                    {links}
                </div>
            </nav>
        </header>
      </>
    )
}


export default withRouter(Navbar);
