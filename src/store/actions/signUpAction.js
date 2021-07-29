import firebase from '../../config/fbConfig';

const createUser = (email, password) => {

  return async function(dispatch){
    const user = await firebase.auth().signup(email, password);

    dispatch({type: 'CREATE_USER', payload: user});
  }
}
export default createUser;
