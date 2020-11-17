import React from 'react';
import {TypografText} from "../../../common/Typograf/TypografText";

const PostDebouncer = ({data, type}) => {

    function createMarkup(attr) {
        if (attr) {
            const outerMarkup = TypografText(attr);
            return {__html:outerMarkup};
        } else {
            const outerMarkup = TypografText(data.text);
            return {__html:outerMarkup};
        }
    }
    if (type === 'header') {
        return (<h2 className='post-page__h2'>{TypografText(data.text)}</h2>)
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
    if (type === 'list') {
        if (data.style === 'ordered') {
            return (
                <ol>
                    {
                        Array.from(data.items || [])
                            .map(
                                item => <li key={data.items.indexOf(item)}>item</li>
                                // item => console.log(item)
                            )
                    }
                </ol>
            )
        }
        if (data.style === 'unordered') {
            return (
                <ul>
                    {
                        Array.from(data.items || [])
                            .map(
                                item => <li key={data.items.indexOf(item)} dangerouslySetInnerHTML={createMarkup(item)}/>
                                // item => console.log(item)
                            )
                    }
                </ul>
            )
        }
    }

    return(
        <>
            <p className='post-page__p' dangerouslySetInnerHTML={createMarkup()}/>
        </>
    )

};

export default PostDebouncer;