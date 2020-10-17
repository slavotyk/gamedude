import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { useForm } from 'react-hook-form';
import { updateGame } from '../../../../../store/actions/gameActions';
import {NavLink} from "react-router-dom";

const GameEditor = (props) => {
    const {game} = props;

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

                    <label htmlFor="title">Game Title</label>
                    <input name='title' defaultValue={game.title} className="create-game-form__input" ref={register}/>

                    <label htmlFor="developer">Game Developer</label>
                    <input name="developer" defaultValue={game.developer} className="create-game-form__input" ref={register}/>

                    <label htmlFor="category">Game Category</label>
                    <input name="category" defaultValue={game.category} className="create-game-form__input" ref={register}/>

                    <label htmlFor="keywords">Keywords</label>
                    <input name="keywords" defaultValue={game.keywords} className="create-game-form__input" ref={register}/>

                    <label htmlFor="poster">Game Poster</label>
                    <img className="create-game-form__imgPrev_poster" alt="poster" src={game.poster}/>
                    <input type="file" id="poster" name="poster" className="create-game-form__input" ref={register}/>

                    <label htmlFor="background">Background</label>
                    <img className="create-game-form__imgPrev_bg" alt="background" src={game.background}/>
                    <input type="file" id="background" name="background" className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkWeb">official WebPage*</label>
                    <input type="text" name="linkWeb" defaultValue={game.linkWeb} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkForum">official (or biggest) Forum</label>
                    <input type="text" name="linkForum" defaultValue={game.linkForum} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkWiki">Wikipedia page*</label>
                    <input type="text" name="linkWiki" defaultValue={game.linkWiki} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkVk">VK.com page</label>
                    <input type="text" name="linkVk" defaultValue={game.linkVk} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkYouTube">YouTube page</label>
                    <input type="text" name="linkYouTube" defaultValue={game.linkYouTube} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkTwitter">Twitter page</label>
                    <input type="text" name="linkTwitter" defaultValue={game.linkTwitter} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkFacebook">Facebook page*</label>
                    <input type="text" name="linkFacebook" defaultValue={game.linkFacebook} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkInst">Instagram page</label>
                    <input type="text" name="linkInst" defaultValue={game.linkInst} className="create-game-form__input" ref={register}/>

                    <label htmlFor="linkTwitch">Twitch page</label>
                    <input type="text" name="linkTwitch" defaultValue={game.linkTwitch} className="create-game-form__input" ref={register}/>

                    <br/>
                    <input type="submit" className="office__button" value="Сохранить"/>

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