import React from 'react';
import { NavLink } from 'react-router-dom';

import './Article.scss';

const Article = ({ id, title, poster}) => (
    <NavLink to={`/games/${ id }`} className="article">
        <img alt="" src={ poster } className="article__poster"/>
        <h4 className="article__title">{ title }</h4>
    </NavLink>
);

export default Article;
