import React from 'react';
import './Article.scss';

const Article = ({ title, poster}) => (
    <div className="article">
        <img alt="" src={ poster } className="articleBackground"/>
        <h4>{ title }</h4>
    </div>
);

export default Article;
