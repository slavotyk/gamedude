import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import './PostPage.scss';
import PostDebouncer from "./PostDebouncer/PostDebouncer";
import AuthorBadge from "./AuthorBadge/AuthorBadge";
import {TypografText} from "../../common/Typograf/TypografText";

const PostPage = (props) => {

    // console.log(props);

    const {post} = props;

    if (post) {
        const {title, content, background, gameName, gameId, authorId, isPR, linkToPR, createdAt, modifiedAt} = post;
        const style = {
            background: `url(${background}) no-repeat center top/cover`
        };
        // console.log(post);

        return (
            <article className='mainContainer' itemscope itemtype="https://schema.org/Article">
                {linkToPR !== '' ? <link itemProp="mainEntityOfPage" href={linkToPR}/> : <></>}
                {background !== '' ? <link itemProp="image" href={background}/> : <></>}
                <meta itemProp="headline name" content={title}/>
                <meta itemProp="description"
                      content={content[0].data.text.replace(/<[^>]*>?/gm, '').substring(0, 147) + '...'}/>
                <meta itemProp="datePublished" datetime={moment(createdAt.toDate()).format('YYYY-MM-DD')}
                      content={moment(createdAt.toDate()).format('YYYY-MM-DD')}/>
                {modifiedAt && <meta itemProp="dateModified" datetime={moment(modifiedAt.toDate()).format('YYYY-MM-DD')}
                                     content={moment(modifiedAt.toDate()).format('YYYY-MM-DD')}/>}

                <div className="post-page__cover" style={style}></div>
                <div className='mainWrapper'>
                    <section className="post-page">
                        <h1 className='post-page__title'>{TypografText(title)}</h1>
                        <NavLink to={`/games/${gameId}`} className="post-page__game">{gameName}</NavLink>
                        <div itemprop="articleBody">
                            {
                                Array.from(content || [])
                                    .map(
                                        item => <PostDebouncer key={content.indexOf(item)} data={item.data}
                                                               type={item.type}/>
                                    )
                            }
                        </div>
                        <AuthorBadge id={authorId} isPR={isPR} linkToPR={linkToPR}/>

                    </section>

                </div>
            </article>
        )
    } else {
        return (
            <div className="container center">
                <p>Загружаем...</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const {post} = state.firestore.data;

    // console.log(post);

    // if (post.authorId)

    // console.log('props');
    return {
        post,
        auth: state.firebase.auth,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'posts',
            doc: props.match.params.id,
            storeAs: 'post'
        },
    ])
)(PostPage);
