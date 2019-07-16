import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostCard.scss';

const PostCard = ({ id, title, poster}) => (
    <NavLink to={`/games/${ id }`} className="post-card">
        <img alt="" src={ poster } className="post-card__poster"/>
        <h4 className="post-card__poster">{ title }</h4>
    </NavLink>
);

export default PostCard;
