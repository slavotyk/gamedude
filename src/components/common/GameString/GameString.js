import React from 'react';
import './GameString.scss';
import {NavLink} from "react-router-dom";
import 'firebase/firestore';
// import {firestore} from "firebase";


const GameString = ({ id, title, background, category, developer}) => (


    <div className="gamesString__container">
        <div className='gamesString__background'> <img alt='' src={background} className='gamesString__background_content'/></div>
        <div className="gamesString__wrapper">
            <h3 className="gamesString__title">{ title }</h3>
            <p className="gamesString__developer">{ developer }</p>
            <p className="gamesString__category">{ category }</p>
        </div>
        {/*<div className='gamesString__button gamesString__button_delete' onClick={firebase.collection("games").doc({id}).delete().then(function() {console.log("Document successfully deleted!");}).catch(function(error) {console.error("Error removing document: ", error);})}>x</div>*/}
        {/*<div className='gamesString__button gamesString__button_delete' onClick={console.log()}>x</div>*/}
        <NavLink to={`./gamesModeration/game/${ id }`}  className='gamesString__button gamesString__button_edit'>edit</NavLink>
    </div>
);

export default GameString;
