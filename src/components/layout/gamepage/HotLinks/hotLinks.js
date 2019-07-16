import React from 'react';


const HotLinks = ({game}) => {
    return(
        <div className="hotLinksWrapper">
            <ul>
                {[
                    {
                        href: game.linkWeb,
                        className: 'web'
                    },
                    {
                        href: game.linkWiki,
                        className: 'wiki'
                    },
                    {
                        href: game.linkForum,
                        className: 'forum'
                    },
                    {
                        href: game.linkTwitch,
                        className: 'twitch'
                    },
                    {
                        href: game.linkInst,
                        className: 'instagram'
                    },
                    {
                        href: game.linkTwitter,
                        className: 'twitter'
                    },
                    {
                        href: game.linkYouTube,
                        className: 'youtube'
                    },
                    {
                        href: game.linkVk,
                        className: 'vkontakte'
                    },
                    {
                        href: game.linkFacebook,
                        className: 'facebook'
                    },
                ].map(({href, className})=>{
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    return href && <li key={className}><a className={`icon ${className}`} target="_blank" href={href} rel="noopener noreferrer"/></li>
                })}
            </ul>
        </div>
    );
};

export default HotLinks;


