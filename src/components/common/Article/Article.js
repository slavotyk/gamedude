import React from 'react';
import { NavLink } from 'react-router-dom';

import './Article.scss';

const Article = ({ title, poster, id}) => (
    <NavLink to={`/games/${ id }`} className="article">
        <img alt="" src={ poster } className="articleBackground"/>
        <h4>{ title }</h4>
    </NavLink>
);

export default Article;
