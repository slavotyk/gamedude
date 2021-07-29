import firebase from '../../config/fbConfig';

const siginUser = (email, password) => {

  return async function(dispatch){
    const user = await firebase.auth().signin(email, password);

    dispatch({type: 'SIGNIN_USER', payload: user});
  }
}
export default siginUser;
