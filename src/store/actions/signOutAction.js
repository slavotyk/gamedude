import firebase from '../../config/fbConfig';
export const signOut = () => {

  return async function(dispatch){
    await firebase.signout();

    dispatch({type: 'SIGNIN_USER', payload: {} });
    dispatch({type: 'CREATE_USER', payload: {} });

  }
}
