import React from 'react';
import { shallow } from 'enzyme';

import { SearchResultBar } from './SearchResultBar';
import GameCard from '../../../common/GameCard/GameCard';

describe('SearchResultBar', () => {
    it('renders without crashing', () => {
        shallow(<SearchResultBar items={[]} />);
    });

    it('renders provided items', () => {
        const items = [
            {
                id: 1,
                title: 'title-1',
                poster: 'poster-1'
            },
            {
                id: 2,
                title: 'title-2',
                poster: 'poster-2'
            }
        ];

        const wrapper = shallow(<SearchResultBar items={ items } />);
        const gameCards = wrapper.find(GameCard);

        expect(gameCards).toHaveLength(items.length);
        items.forEach(
            (item, index) => expect(
                gameCards.at(index).props()
            ).toEqual({
                title: item.title,
                poster: item.poster
            })
        );
    });

    it('renders not found header when no items provided', () => {
        const wrapper = shallow(<SearchResultBar items={[]} />);
        const div = wrapper.find('div.searchResultBar');

        expect(div).toHaveLength(0);
    });
});