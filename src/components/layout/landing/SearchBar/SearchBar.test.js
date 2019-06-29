import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
    it('renders without crashing', () => {
        shallow(<SearchBar/>);
    });

    it('runs search on button click', () => {
        const query = 'dota';
        const event = {
            target: {
                value: query
            }
        };
        const setSearchQuery = jest.fn();
        const setSearchResult = jest.fn();
        const history = {
            push: () => {}
        };

        const wrapper = shallow(<SearchBar setSearchQuery={ setSearchQuery } setSearchResult={ setSearchResult } history={ history } />);
        const input = wrapper.find('input');
        input.simulate('change', event);
        const button = wrapper.find('button');
        button.simulate('click');

        expect(setSearchQuery).toHaveBeenCalledWith(query);
        expect(setSearchResult).toHaveBeenCalledWith(query);
    });
});