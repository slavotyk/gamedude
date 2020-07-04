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
                                .sort(
                                    (post1, post2) => post2.createdAt.seconds - post1.createdAt.seconds
                                )
                                .map(
                                    ({ id, title, background, author }) => <PostOnGamePage key={ id } id={id} title={ title} poster={background} author={author && `${author.firstName} ${author.lastName}`} avatar={author && author.avatar}/>
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
