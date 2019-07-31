import { uploadFile } from './helpers';

export const createPost = (post) => {
  return async (dispatch, getState, {getFirestore, getFirebase}) => {
    try {
      const firebase = getFirebase();
      const storageRef = firebase.storage().ref();

      const { background } = post;

      const backgroundUrl = await uploadFile(storageRef, background);

      const firestore = getFirestore();
      const authorId = getState().firebase.auth.uid;

      await firestore.collection('posts').add({
        ...post,
        background: backgroundUrl,
        authorId: authorId,
        createdAt: new Date()
      });

      dispatch({ type: 'CREATE_POST_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'CREATE_POST_ERROR' }, err);
    }
  }
};
