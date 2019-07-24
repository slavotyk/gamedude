import React from 'react';
import { shallow } from 'enzyme';

import { MainLastPosts } from './MainLastPosts';
import PostCard from '../../../common/PostCard/PostCard';

describe('MainLastPosts', () => {
    it('renders without crashing', () => {
        shallow(<MainLastPosts items={[]} />);
    });

    it('renders provided items', () => {
        const items = [
            {
                id: 1,
                title: 'title-1'
            },
            {
                id: 2,
                title: 'title-2'
            }
        ];

        const wrapper = shallow(<MainLastPosts items={ items } />);
        const postCards = wrapper.find(PostCard);

        expect(postCards).toHaveLength(items.length);
        items.forEach(
            (item, index) => expect(
                postCards.at(index).props()
            ).toEqual({
                title: item.title,
                poster: item.poster
            })
        );
    });

    it('renders not found header when no items provided', () => {
        const wrapper = shallow(<MainLastPosts items={[]} />);
        const div = wrapper.find('div.mainLastWrapper');

        expect(div).toHaveLength(0);
    });
});