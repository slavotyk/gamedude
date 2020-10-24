import React, {useEffect, useRef, useState} from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import {NavLink} from "react-router-dom";

import './PostCreation.scss';
import { useForm } from 'react-hook-form';
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import List from '@editorjs/list';

import Autocomplete from "../../../common/Autocomplete/Autocomplete";
import {createPost} from "../../../../store/actions/postActions";

const PostCreation = (props) => {

    const { register, handleSubmit } = useForm();

    const dataRef = useRef();

    useEffect(() => {

        dataRef.current = new EditorJS({
            /**
             * Id of Element that should contain Editor instance
             */
            holder: 'editorjs',
            tools: {
                header: {
                    class: Header,
                    inlineToolbar : true
                },
                embed: {
                    class: Embed,
                    config: {
                        services: {
                            youtube: true,
                            coub: true,
                            twitch: true,
                        }
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
            },
            data: {
                    time: 1556098174501,
                    blocks: [
                        {
                            type: "header",
                            data: {
                                text: "Время написать свой шедевр",
                                level: 2
                            }
                        },
                        {
                            type: "paragraph",
                            data: {
                                text:
                                    "Просто начните вводить текст, ведь это так просто! ^_^ "
                            }
                        },
                    ],
                    version: "2.12.4"
                },
            onReady: () => { saver() },
            onChange: () => { saver() },
        });
    // eslint-disable-next-line
    }, []);


    const [state, setState] = useState({
        title: '',
        gameId: '',
        gameName: '',
        content: [],
        background: null,
        isPR: false,
        linkToPR: ''
    });

    useEffect( () => {
        console.log(state);
    }, [state])

    const gettingBgIntoState = () => {
        if (document.getElementById('background').files[0]) {
            setState({
                ...state,
                background: document.getElementById('background').files[0]
            });
        }};

    const gettingTitleIntoState = (data) => {
        const title = document.getElementById('title').value
        setState({
            ...state,
            title: title
        });
    }

    const gettingPRLinkIntoState = (data) => {
        const linkToPR = document.getElementById('linkToPR').value
        setState({
            ...state,
            linkToPR: linkToPR
        });
    }

    const saver = () => {
        dataRef.current.save()
            .then((outputData) => {
                setState(state =>({
                    ...state,
                    content: outputData.blocks
                }))
            })
            .catch((error) => {
                console.log('Saving failed: ', error)
            });
    }

    const isPRhandler = () => {
        if (state.isPR === true) {
            setState(state =>({
                ...state,
                isPR: !state.isPR,
                linkToPR: ''

            }))
        } else {
            setState(state =>({
                ...state,
                isPR: !state.isPR,
            }))
        }

    }

    const onSubmit = () => {
        // Post Blocks

        if ((state.background !== 'null') && (state.content !== [])) {
            createPost(state)
            // console.log(state)
        }
    };

    const getSuggestions = value => {
        const { games } = props;
        return Object.entries(games)
            .map(
                ([ id, game ]) => ({ ...game, id })
            )
            .filter(
                ({ title }) => title.toLowerCase().includes(value.toLowerCase())
            );
    };

    const gameChangeHandler = ( game, gameName ) => {
        setState({...state, gameId: game, gameName: gameName});
    };

    return(
        <section className='create-post__container'>
            <NavLink to={`/back-office`} className="office__button">Назад</NavLink>
            <div className="moderation__wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="title" className="label">Заголовок</label><br/>
                    <input name='title' id="title" className="create-game-form__input" onChange={gettingTitleIntoState} ref={register}/><br/>
                    <label htmlFor="background" className="label">Обложка</label><br/>
                    <input type="file" id="background" name="background" className="create-game-form__input" onChange={gettingBgIntoState} ref={register}/>
                    <Autocomplete getSuggestions={getSuggestions} inputClassName={"create-post__input_gamePicker"} placeholder="Выберите про какую игру ваш пост" onChange={ gameChangeHandler }/>
                    <div id='editorjs'  ref={register}/>
                    <div>
                        <label htmlFor="isPR" className="label">Является ли статья пресс-релизом со стороннего ресурса?</label>
                        <input type="checkbox" className="create-game-form__input" id="isPR" name="isPR" ref={register} onChange={isPRhandler}/>
                        <label htmlFor="isPR" className="label_text">Да</label>
                        {state.isPR ?
                            <>
                                <br/>
                                <label htmlFor="linkToPR" className="label">Ссылка на оригинал / источник</label>
                                <input name='linkToPR' id="linkToPR" ref={register} className="create-game-form__input" onChange={gettingPRLinkIntoState} /><br/>
                            </>
                            :
                            <></>
                        }
                    </div>
                    <br/>
                    <input type="submit" className="office__button office__button_newLine" value="Сохранить"/>
                </form>

            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    games: state.firestore.data.games
});

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'games'
    }])
)(PostCreation);
