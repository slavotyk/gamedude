import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

import './PostOnUserPage.scss';
import {TypografText} from "../Typograf/TypografText";


const PostOnUserPage = ({id, title, poster, game, date, userId, author}) => {
    const [postItem, setPostItem] = useState({
        id: '',
        title: 'Загружаем...',
        poster: '',
        game: '',
        date: ''
    });
    useEffect(() => {
        setPostItem({
            ...postItem,
            id: id,
            title: title,
            poster: poster,
            game: game,
            date: date,
        })
        // eslint-disable-next-line
    }, [id, title, poster, game, date])

    if (userId === author) {
        return (
            <NavLink to={`./posts/${postItem.id}`} className="post-string">
                <div className='post-string__gradient'> </div>
                <img alt="" src={postItem.poster} className="post-string__poster"/>
                <h4 className="post-string__title">{TypografText(postItem.title)}</h4>
                <p className="post-string__game">{postItem.game}</p>
                <p className='post-string__date'> {postItem.date} </p>
            </NavLink>
        )
    } else {
        return (
            <NavLink to={`/post/${id}`} className="post-string">
                <div className='post-string__gradient'> </div>
                <img alt="" src={postItem.poster} className="post-string__poster"/>
                <h4 className="post-string__title">{TypografText(postItem.title)}</h4>
                <p className="post-string__game">{postItem.game}</p>
                <p className='post-string__date'> {postItem.date} </p>
            </NavLink>
        )
    }
}




export default PostOnUserPage;
