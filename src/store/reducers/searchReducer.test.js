import searchReducer from './searchReducer';

describe('searchReducer', () => {
    it('returns new state with new query when action.type is SET_SEARCH_QUERY', () => {
        const state = {};
        const action = {
            type: 'SET_SEARCH_QUERY',
            payload: 'dota'
        };

        const newState = searchReducer(state, action);

        expect(newState.query).toEqual(action.payload);
    });

    it('returns new state with new items when action.type is SET_SEARCH_RESULT', () => {
        const state = {};
        const action = {
            type: 'SET_SEARCH_RESULT',
            payload: [ 1, 2, 3 ]
        };

        const newState = searchReducer(state, action);

        expect(newState.items).toEqual(action.payload);
    });

    it('returns same state when action.type is other', () => {
        const state = {};
        const action = {
            type: 'OTHER',
            payload: 'something'
        };

        const newState = searchReducer(state, action);

        expect(newState).toEqual(state);
    });

    it('throws an error when action is not defined', () => {
        expect(
            () => searchReducer({})
        ).toThrow();
    });
});