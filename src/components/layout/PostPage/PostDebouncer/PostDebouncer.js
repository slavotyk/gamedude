import React from 'react';


const PostDebouncer = ({data, type}) => {

    console.log(data);
    if (type === 'header') {
        return (<h2 className='post-page__h2'>{data.text}</h2>)
    }

    return(
        <>
            <p className='post-page__p'>{data.text}</p>
        </>
    )

};

export default PostDebouncer;