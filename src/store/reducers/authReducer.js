const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
    return {
        ...state,
        authError: 'Login failed'
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      }

    case 'SIGNOUT_SUCCESS':
      return state;

    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      }

    case 'AVATAR_CHANGE_SUCCESS':
      return state;

    case 'AVATAR_CHANGE_ERROR':
      console.log('update avatar error', action.err.message);
      return state;

    default:
      return state
  }
};

export default authReducer;
