import React from 'react';


const PostDebouncer = ({data, type}) => {

    // console.log(data);
    function createMarkup() {
        return {__html: data.text};
    }
    if (type === 'header') {
        return (<h2 className='post-page__h2'>{data.text}</h2>)
    }
    if (type === 'embed') {
        return (
            <iframe className='post-page__embed'
                    title={data.caption}
                    src={data.embed}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>

        )
    }

    return(
        <>
            <p className='post-page__p' dangerouslySetInnerHTML={createMarkup()}/>
        </>
    )

};

export default PostDebouncer;