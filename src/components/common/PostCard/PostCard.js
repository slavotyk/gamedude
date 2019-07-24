import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostCard.scss';

const PostCard = ({ id, title, poster, game }) => (
    <NavLink to={`/posts/${ id }`} className="post-card">
        <img alt="" src={ poster } className="post-card__poster"/>
        <h4 className="post-card__title">{ title }</h4>
        <p className="post-card__game">{game}</p>
    </NavLink>
);

export default PostCard;
