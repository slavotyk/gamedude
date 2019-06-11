import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="authLinksList">
        {/*<li><NavLink to='/create'>Новый Пост</NavLink></li>*/}
        <li><button onClick={props.signOut}>Выйти</button></li>
        <li><NavLink to='/' className="userAvatar">
          {props.profile.initials}
        </NavLink></li>
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
