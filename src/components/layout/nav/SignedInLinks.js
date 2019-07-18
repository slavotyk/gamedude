import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'

const SignedInLinks = (props) => {
  const {profile} = props;
  const avatarStyle = {
    background: profile.avatar && `url(${profile.avatar}) no-repeat center top/cover`
};

  return (
    <div>
      <ul className="authLinksList">
        {/*<li><NavLink to='/create'>Новый Пост</NavLink></li>*/}
        <li><button onClick={props.signOut} className="navigationButton">Выйти</button></li>
        <li><NavLink to='/back-office' className="userAvatar" style={avatarStyle}/></li>
      </ul>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(SignedInLinks)
