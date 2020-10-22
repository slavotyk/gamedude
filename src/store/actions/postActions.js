import { uploadFile } from './helpers';
import * as firebase from "firebase";

export const createPost = async (post) => {

  // console.log('start');
  // console.log(post);
  const db = firebase.firestore();
  const firestorePostRef = db.collection('posts');

  const storage = firebase.storage();
  const storageRef = storage.ref().child('posts');

  // console.log('start uploading...');

  const backgroundUrl = await uploadFile(storageRef, post.background);

  const authorId = firebase.auth().currentUser.uid;
    await firestorePostRef.add({
        title: post.title,
        gameId: post.gameId,
        gameName: post.gameName,
        content: post.content,
        background: backgroundUrl,
        authorId: authorId,
        isPR: post.isPR,
        linkToPR: post.linkToPR,
        createdAt: new Date(),
    });

  // return async (dispatch, getState, {getFirestore, getFirebase}) => {
  //   try {
  //     const firebase = getFirebase();
  //     const storageRef = firebase.storage().child('posts').ref();
  //     const { background } = post;
  //     const backgroundUrl = await uploadFile(storageRef, background);
  //
  //     const firestore = getFirestore();
  //     const authorId = getState().firebase.auth.uid;
  //
  //     await firestore.collection('posts').add({
  //       ...post,
  //       background: backgroundUrl,
  //       authorId: authorId,
  //       createdAt: new Date()
  //     });
  //
  //     dispatch({ type: 'CREATE_POST_SUCCESS' });
  //   } catch (err) {
  //     dispatch({ type: 'CREATE_POST_ERROR' }, err);
  //   }
  // }
};
