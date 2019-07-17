import React from 'react';
import { NavLink } from 'react-router-dom';

import './GameCard.scss';

const GameCard = ({ id, title, poster}) => (
    <NavLink to={`/games/${ id }`} className="game-card">
        <img alt="" src={ poster } className="game-card__poster"/>
        <h4 className="game-card__poster">{ title }</h4>
    </NavLink>
);

export default GameCard;
