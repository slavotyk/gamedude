const signInReducer = (
    state = {
      user: {}
    },
    action) => {
      if (action.type === "SIGNIN_USER"){
        state = {...state, user: action.payload}
      }
      return state;
    };

export default signInReducer;
