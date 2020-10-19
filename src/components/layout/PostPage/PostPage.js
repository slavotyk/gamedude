import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { NavLink } from 'react-router-dom';

import './PostPage.scss';
import PostDebouncer from "./PostDebouncer/PostDebouncer";



const PostPage = (props) => {


    const { post } = props;

    if (post) {
        const { title, content, background, game, gameId } = post;
        const style={
            background: `url(${ background }) no-repeat center top/cover`
        };


        return (
            <div className='mainContainer'>

                <div className="post-page__cover" style={ style }> </div>
                <div className='mainWrapper'>
                    <section className="post-page">
                        <h1 className='post-page__title'>{title}</h1>
                        <NavLink to={`/games/${ gameId }`} className="post-page__game">{game}</NavLink>
                        {/*<div className='post-page__img'>*/}
                        {/*    <img alt="" src={ background } className='post-page__img_blur'/>*/}
                        {/*    <img alt="" src={ background } className='post-page__img_pic'/>*/}
                        {/*</div>*/}
                        {
                            Array.from(content || [])
                                .map(
                                    item => <PostDebouncer key={ content.indexOf(item) } data={item.data} type={item.type}/>
                                )
                        }
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

const mapStateToProps = (state) => {
    const { post } = state.firestore.data;

    return {
        post,
        auth: state.firebase.auth,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'posts',
            doc: props.match.params.id,
            storeAs: 'post'
        }
    ])
)(PostPage);
