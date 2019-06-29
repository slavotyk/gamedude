import { setSearchQuery, setSearchResult } from './/searchActions';

describe('setSearchQuery', () => {

    it('returns action with type SET_SEARCH_QUERY',() => {
        const result = setSearchQuery();

        expect(result.type).toEqual('SET_SEARCH_QUERY');
    });

    it('returns action with provided payload',() => {
        const query='dota';

        const result = setSearchQuery(query);

        expect(result.payload).toEqual(query);
    });

    it('returns action with undefined payload when query is not provided',() => {

        const result = setSearchQuery();

        expect(result.payload).toEqual(undefined);
    });
});


describe('setSearchResult', () => {

    it('returns action with type SET_SEARCH_RESULT',() => {
        const result = setSearchResult();

        expect(result.type).toEqual('SET_SEARCH_RESULT');
    });

    it('returns action with provided payload',() => {
        const query='dota';

        const result = setSearchResult(query);

        result.payload.forEach((game)=>{
            expect(game.title.toLowerCase()).toContain(query);
        });
    });
});