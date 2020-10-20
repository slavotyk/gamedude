import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostOnUserPage.scss';

const PostOnUserPage = ({ id, title, poster, game, date }) => (
    <NavLink to={`/posts/${ id }`} className="post-string">
        <div className='post-string__gradient'> </div>
        <img alt="" src={ poster } className="post-string__poster"/>
        <h4 className="post-string__title">{ title }</h4>
        <p className="post-string__game">{ game }</p>
        <p className='post-string__date'> { date } </p>
    </NavLink>
);

export default PostOnUserPage;
