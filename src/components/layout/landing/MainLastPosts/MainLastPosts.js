import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { compose } from 'redux';
import moment from 'moment';
import 'moment/locale/ru';


import PostCard from '../../../common/PostCard/PostCard';

import './MainLastPosts.scss';

moment.locale('ru');

export const MainLastPosts = (props) => {
    const { posts } = props;

    if (posts) {
        return (
            <section className='mainLastContainer'>
                <h2 className='freshHeading'>Последние публикации</h2>
                <div className='mainLastWrapper'>
                    {
                        Object.entries(posts || [])
                            .map(
                                ([ id, post ]) => ({ ...post, id })
                            )
                            .sort(
                                (post1, post2) => post2.createdAt.seconds - post1.createdAt.seconds
                            )
                            .slice(0, 4)
                            .map(
                                post => <PostCard key={ post.id } id={post.id} title={ post.title } poster={post.background} game={ post.game } date={ moment(post.createdAt.toDate()).format('DD MMM YYYY') }/>
                            )
                    }
                </div>
            </section>
        );
    }
    else {
        return (
            <section>
                <h2 className='freshHeading'>Последние публикации</h2>
                <p>Публикаций нет</p>
            </section>
        );
    }
};

const mapStateToProps = (state) => {
    const posts = state.firestore.data.posts;
    return {
        posts: posts
    }
};

export default composeWithDevTools(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)( MainLastPosts );
