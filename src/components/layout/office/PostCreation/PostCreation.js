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
        content: [],
        background: null,
    });

    // useEffect( () => {
    //     console.log(state);
    // }, [state])

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


    const onSubmit = () => {
        // Post Blocks

        if ((state.background !== 'null') && (state.content !== [])) {
            createPost(state)
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

    const gameChangeHandler = ( game ) => {
        setState({...state, gameId: game});
    };

    return(
        <section className='create-post__container'>
            <NavLink to={`/back-office`} className="office__button">Назад</NavLink>
            <div className="moderation__wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="background">Заголовок</label><br/>
                    <input name='title' id="title" className="create-game-form__input" onChange={gettingTitleIntoState} ref={register}/><br/>
                    <label htmlFor="background">Обложка</label><br/>
                    <input type="file" id="background" name="background" className="create-game-form__input" onChange={gettingBgIntoState} ref={register}/>
                    <Autocomplete getSuggestions={getSuggestions} inputClassName={"create-post__input_gamePicker"} placeholder="Выберите про какую игру ваш пост" onChange={ gameChangeHandler }/>
                    <div id='editorjs'  ref={register}/>
                    <input type="submit" className="office__button" value="Сохранить"/>
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
