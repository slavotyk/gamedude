import React, {useEffect, useState} from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { useForm } from 'react-hook-form';
import { updateGame } from '../../../../../store/actions/gameActions';
import {NavLink} from "react-router-dom";

const GameEditor = (props) => {
    const {game} = props;

    const [gameState, setGameState] = useState({
        title: '',
        developer: '',
        category: '',
        keywords: '',
        poster: '',
        background: '',
        linkWeb: '',
        linkForum: '',
        linkWiki: '',
        linkVk: '',
        linkYouTube: '',
        linkTwitter: '',
        linkFacebook: '',
        linkInst: '',
        linkTwitch: ''
    });

    useEffect(() => {
        game && setGameState({
            ...gameState,
            title: game.title,
            developer: game.developer,
            category: game.category,
            keywords: game.keywords,
            poster: game.poster,
            background: game.background,
            linkWeb: game.linkWeb,
            linkForum: game.linkForum,
            linkWiki: game.linkWiki,
            linkVk: game.linkVk,
            linkYouTube: game.linkYouTube,
            linkTwitter: game.linkTwitter,
            linkFacebook: game.linkFacebook,
            linkInst: game.linkInst,
            linkTwitch: game.linkTwitch
        })
        // eslint-disable-next-line
    }, [game])

    const { register, handleSubmit } = useForm();

    if (game) {

        const oldBg = game.background;
        const oldPoster = game.poster;
        const onSubmit = data => {
            const newBg = document.getElementById('background').files[0];
            const newPoster = document.getElementById('poster').files[0];
            updateGame(data, props.match.params.id, newBg, newPoster, oldBg, oldPoster);
        };

        return(
            <>
                <form onSubmit={handleSubmit(onSubmit)} className="create-game-form">
                    <NavLink to={`/back-office/gamesModeration`} className="office__button">Назад</NavLink>

                    <label htmlFor="title" className='label'>Game Title</label>
                    <input name='title' defaultValue={gameState.title} className="create-game-form__input" ref={register}/>

                    <label htmlFor="developer" className='label'>Game Developer</label>
                    <input name="developer" defaultValue={gameState.developer} className="create-game-form__input" ref={register}/>

                    <label htmlFor="category" className='label'>Game Category</label>
                    <input name="category" defaultValue={gameState.category} className="create-game-form__input" ref={register}/>

                    <label htmlFor="keywords" className='label'>Keywords</label>
                    <input name="keywords" defaultValue={gameState.keywords} className="create-game-form__input" ref={register}/>

                    <label htmlFor="poster" className='label'>Game Poster</label>
                    <img className="create-game-form__imgPrev_poster" alt="poster" src={gameState.poster}/>
                    <input type="file" id="poster" name="poster" className="create-game-form__input" ref={register}/>

                    <label htmlFor="background" className='label'>Background</label>
                    <img className="create-game-form__imgPrev_bg" alt="background" src={gameState.background}/>
                    <input type="file" id="background" name="background" className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkWeb" className='label'>official WebPage*</label>
                    <input type="text" name="linkWeb" defaultValue={gameState.linkWeb} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkForum" className='label'>official (or biggest) Forum</label>
                    <input type="text" name="linkForum" defaultValue={gameState.linkForum} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkWiki" className='label'>Wikipedia page*</label>
                    <input type="text" name="linkWiki" defaultValue={gameState.linkWiki} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkVk" className='label'>VK.com page</label>
                    <input type="text" name="linkVk" defaultValue={gameState.linkVk} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkYouTube" className='label'>YouTube page</label>
                    <input type="text" name="linkYouTube" defaultValue={gameState.linkYouTube} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkTwitter" className='label'>Twitter page</label>
                    <input type="text" name="linkTwitter" defaultValue={gameState.linkTwitter} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkFacebook" className='label'>Facebook page*</label>
                    <input type="text" name="linkFacebook" defaultValue={gameState.linkFacebook} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkInst" className='label'>Instagram page</label>
                    <input type="text" name="linkInst" defaultValue={gameState.linkInst} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkTwitch" className='label'>Twitch page</label>
                    <input type="text" name="linkTwitch" defaultValue={gameState.linkTwitch} className="create-game-form__input" ref={register}/>

                    <br/>
                    <input type="submit" className="office__button office__button_newLine" value="Сохранить"/>

                </form>
            </>
        );
    } else {
        return(
            <section className='moderation__container'>
                Loading...
            </section>
        )
    }

};

const mapStateToProps = (state) => {
    const { game } = state.firestore.data;

    return {
        game,
        auth: state.firebase.auth,
        state
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'games',
            doc: props.match.params.id,
            storeAs: 'game'
        },
    ])
)(GameEditor);