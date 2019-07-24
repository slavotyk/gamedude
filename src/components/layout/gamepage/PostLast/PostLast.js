import React from 'react';

import PostOnGamePage from '../PostLast/PostOnGamePage/PostOnGamePage';

import './PostLast.scss';

const PostLast = ({ posts=[] }) => {
    return (
        <section>
            <h2 className='heading-gamePage'>Последние публикации</h2>
            { (posts) 
                ? (
                    <div className='postsWrapper'>
                        {
                            (Object.entries(posts || []))
                                .map(
                                    ([ id, post ]) => ({ ...post, id })
                                )
                                .map(
                                    post => <PostOnGamePage key={ post.id } id={post.id} title={ post.title} author={post.authorFirstName+" "+post.authorLastName} avatar={post.avatar}/>
                                )
                        }
                    </div>
                )
                : (
                    <div className='postsWrapper'>Публикаций нет =(</div>
                )
            }
        </section>
    );
};

export default PostLast;
