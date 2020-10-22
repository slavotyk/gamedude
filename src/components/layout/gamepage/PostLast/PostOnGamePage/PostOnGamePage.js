import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostOnGamePage.scss';
import {TypografText} from "../../../../common/Typograf/TypografText";



const PostOnGamePage = ({ id, title, poster, game, date }) => (
    <NavLink to={`/posts/${ id }`} className="post-card">
        <div className='post-card__gradient'> </div>
        <img alt="" src={ poster } className="post-card__poster"/>
        <h4 className="post-card__title">{ TypografText(title) }</h4>
        <p className="post-card__game">{ game }</p>
        <p className='post-card__date'> { date } </p>
    </NavLink>
);

export default PostOnGamePage;
