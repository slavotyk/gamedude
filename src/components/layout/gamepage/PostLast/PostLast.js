import React from 'react';

import PostOnGamePage from '../PostLast/PostOnGamePage/PostOnGamePage';

import './PostLast.scss';

const PostLast = ({ items }) => (
    <section>
        <h2>Последние публикации</h2>
        <div className='mainLastWrapper'>
        {
            (items || []).map(
                item => <PostOnGamePage key={ item.id } title={ item.title }/>
            )
        }
        </div>
    </section>
);

export default PostLast;
