const uploadFile = async (storageRef, file) => {
  const fileRef = storageRef.child(file.name);
  const snapshot = await fileRef.put(file);
  return await snapshot.ref.getDownloadURL();
};

export const createGame = (game) => {
  return async (dispatch, getState, {getFirestore, getFirebase}) => {
    try {
      const firebase = getFirebase();
      const storageRef = firebase.storage().ref();

      const { poster, background } = game;

      const posterUrl = await uploadFile(storageRef, poster);
      const backgroundUrl = await uploadFile(storageRef, background);

      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;

      await firestore.collection('games').add({
        ...game,
        poster: posterUrl,
        background: backgroundUrl,
        keywords: game.keywords.toLowerCase().split(','),
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      });

      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    }
  }
};
