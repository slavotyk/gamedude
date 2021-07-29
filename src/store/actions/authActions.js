import { uploadFile } from './helpers';


export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}


export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}

export const updateAvatar = (uid, avatarFile) => {
  return async (dispatch, getState, {getFirestore, getFirebase}) => {
    try {
      const firebase = getFirebase();
      const storageRef = firebase.storage().ref();

      const avatarUrl = await uploadFile(storageRef, avatarFile);

      const firestore = getFirestore();

      const userDoc = firestore.collection('users').doc(uid);
      await userDoc.set({
        avatar: avatarUrl
      }, { merge: true });

      dispatch({ type: 'AVATAR_CHANGE_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'AVATAR_CHANGE_ERROR', err });
    }
  }
}
