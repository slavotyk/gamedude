import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostOnGamePage.scss';

const PostOnGamePage = ({ id, title, avatar='', author}) => (
    <NavLink to={`/posts/${ id }`} className="post-on-page-game">
        <img alt="" src={ avatar } className="post-on-page-game__poster"/>
        <h4 className="post-on-page-game__title">{ title }</h4>
        <p>{ author }</p>
    </NavLink>
);

export default PostOnGamePage;
