import React from 'react';
import './Article.scss';

const Article = ({ title }) => (
    <div className="article">
        <h4>{ title }</h4>
    </div>
);

export default Article;
