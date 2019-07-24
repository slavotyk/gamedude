import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import PostCard from '../../../common/PostCard/PostCard';

import './MainLastPosts.scss';

export const MainLastPosts = (props) => {
    const { posts } = props; 

    if (posts) {
        return (
            <section>
                <h2>Последние публикации</h2>
                <div className='mainLastWrapper'>
                    {
                        Object.entries(posts)
                            .map(
                                ([ id, post ]) => ({ ...post, id })
                            )
                            .map(
                                post => <PostCard key={ post.id } id={post.id} title={ post.title } poster={post.background} game={ post.game}/>
                            )
                    }
                </div>
            </section>
        );
    }
    else {
        return (
            <section>
                <h2>Последние публикации</h2>
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)( MainLastPosts );
