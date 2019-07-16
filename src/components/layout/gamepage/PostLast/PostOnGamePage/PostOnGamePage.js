import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostOnGamePage.scss';

const PostOnGamePage = ({ id, title, poster}) => (
    <NavLink to={`/games/${ id }`} className="post">
        <img alt="" src={ poster } className="post__poster"/>
        <h4 className="post__poster">{ title }</h4>
    </NavLink>
);

export default PostOnGamePage;
