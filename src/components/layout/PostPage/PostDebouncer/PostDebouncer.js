import React from 'react';


const PostDebouncer = ({data, type}) => {

    // console.log(data);
    function createMarkup() {
        return {__html: data.text};
    }
    if (type === 'header') {
        return (<h2 className='post-page__h2'>{data.text}</h2>)
    }

    return(
        <>
            <p className='post-page__p' dangerouslySetInnerHTML={createMarkup()}/>
        </>
    )

};

export default PostDebouncer;