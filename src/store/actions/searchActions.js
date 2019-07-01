export const setSearchQuery = query => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
});

export const setSearchResult = result => ({
    type: 'SET_SEARCH_RESULT',
    payload: result
});

export const search = query => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch(setSearchQuery(query));

        getFirestore().get({
            collection: 'games',
            where: [ 'keywords', 'array-contains', query.toLowerCase() ],
        }).then(result => {
            const games = result.docs
                .map(
                    document => {
                        const { id } = document;
                        const { title, poster } = document.data();

                        return { id, title, poster };
                    }
                );

            dispatch(setSearchResult(games));
        });
    };
};