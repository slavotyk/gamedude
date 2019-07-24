import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { NavLink } from 'react-router-dom';

import './PostPage.scss';

const PostPage = (props) => {
    const { post } = props;

    if (post) {
        const { title, content, background, game, gameId } = post;

        return (
            <div className='mainContainer'>
                <div className='mainWrapper'>
                    <section className="post-page">
                        <h2>{title}</h2>
                        <NavLink to={`/games/${ gameId }`} className="post-page__game">{game}</NavLink>
                        <img alt="" src={ background }/>
                        <p> { content }</p>
                    </section>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Загружаем...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;

    const post = posts ? posts[id] : null;
    return {
        post: post,
        auth: state.firebase.auth,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(PostPage);