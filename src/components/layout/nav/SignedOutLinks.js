import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="authLinksList">
        <li><NavLink to='/signin'>Войти</NavLink></li>
        <li><NavLink to='/signup' className='button'>Зарегистрироваться</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
