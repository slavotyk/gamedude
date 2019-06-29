import React from 'react';
import { shallow } from 'enzyme';

import { MainLast } from './MainLast';
import Article from '../../../common/Article/Article';

describe('MainLast', () => {
    it('renders without crashing', () => {
        shallow(<MainLast items={[]} />);
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

        const wrapper = shallow(<MainLast items={ items } />);
        const articles = wrapper.find(Article);

        expect(articles).toHaveLength(items.length);
        items.forEach(
            (item, index) => expect(
                articles.at(index).props()
            ).toEqual({
                title: item.title,
                poster: item.poster
            })
        );
    });

    it('renders not found header when no items provided', () => {
        const wrapper = shallow(<MainLast items={[]} />);
        const div = wrapper.find('div.mainLastWrapper');

        expect(div).toHaveLength(0);
    });
});