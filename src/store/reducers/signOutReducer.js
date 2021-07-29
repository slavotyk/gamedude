const signOutReducer = (
    state = {
      user: {}
    },
    action) => {
      if (action.type === "SIGNOUT_USER"){
        state = {...state, user: action.payload}
      }
      return state;
    };

export default signOutReducer;
