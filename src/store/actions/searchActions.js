import games from './mock/games';

export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
});

export function setSearchResult(query='') {
    const queryLower = query.toLowerCase();
    const result = games.filter(
        game => game.title.toLowerCase().split(" ").some(word => word.indexOf(queryLower) === 0)
    );
    return {
        type: 'SET_SEARCH_RESULT',
        payload: result
    };
}