export const createGame = (game) => {
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    const firebase = getFirebase();
    const storageRef = firebase.storage().ref();

    const { poster } = game;
    const fileRef = storageRef.child(poster.name);
    fileRef.put(poster).then(
      snapshot => snapshot.ref.getDownloadURL()
    ).then(
      url => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('games').add({
          ...game,
          poster: url,
          keywords: game.keywords.toLowerCase().split(','),
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorId: authorId,
          createdAt: new Date()
        }).then(() => {
          dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
        }).catch(err => {
          dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
      }
    );
  }
};
