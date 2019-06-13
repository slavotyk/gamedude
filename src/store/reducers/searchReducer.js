const initialState = {
    query: '',
    items: []
};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                query: action.payload
            };
        case 'SET_SEARCH_RESULT':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
  }
}

export default searchReducer;
