import React, {useEffect} from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// import GameString from '../../../common/GameString/GameString';
import {NavLink} from "react-router-dom";

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

import './PostCreation.scss';

const PostCreation = () => {
    useEffect(() => {
        // eslint-disable-next-line
        const editor = new EditorJS({
            /**
             * Id of Element that should contain the Editor
             */
            holder: 'editorjs',

            /**
             * Available Tools list.
             * Pass Tool's class or Settings object for each Tool you want to use
             */
            tools: {
                header: Header,
                list: List
            },
        });
    }, []);
    // eslint-disable-next-line

    return(
        <section className='moderation__container'>
            <NavLink to={`/back-office`} className="office__button">Назад</NavLink>
            {/*<h2 className='moderation__heading'>Создание нового поста</h2>*/}
            <div className="moderation__wrapper">
                <div id="editorjs">

                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        games: state.firestore.ordered.games
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'games'
    }])
)(PostCreation);
