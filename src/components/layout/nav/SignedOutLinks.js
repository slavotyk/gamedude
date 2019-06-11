import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="authLinksList">
        <li><NavLink to='/signup'>Зарегистрироваться</NavLink></li>
        <li><NavLink to='/signin'>Войти</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
