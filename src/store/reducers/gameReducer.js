const initState = {};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    default:
      return state;
  }
};

export default gameReducer;
