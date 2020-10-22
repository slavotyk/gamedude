import {uploadFile} from './helpers';
// import {getFirestore} from "redux-firestore";
import * as firebase from "firebase/app";
import 'firebase/firestore'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

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

export const updateGame = async (game, doc, newBg, newPoster, oldBg, oldPoster) => {

  const db = firebase.firestore();
  const firestoreGameRef = db.collection('games').doc(doc);

  // connecting to firebase
  const storage = firebase.storage();
  const storageRef = firebase.storage().ref();

  if ((game.background.length === 0) || (game.background === '')) {
    delete game.background;
  } else {
    // deleting old img
    if (oldBg) {
      const indexOfFirst = oldBg.indexOf('?');
      const deleteRef = storage.refFromURL(oldBg.substring(0, indexOfFirst));
      await deleteRef.delete();
    }

    // uploading new img
    game.background = await uploadFile(storageRef, newBg);
  }

  if ((game.poster.length === 0) || (game.poster === '')) {
    delete game.poster;
  } else {
    // deleting old img
    if (oldPoster) {
      const indexOfFirst = oldPoster.indexOf('?');
      const deleteRef = storage.refFromURL(oldPoster.substring(0, indexOfFirst));
      await deleteRef.delete();
    }

    // uploading new img
    game.poster = await uploadFile(storageRef, newPoster);
  }

  await firestoreGameRef.update({
    ...game,
    keywords: game.keywords.toLowerCase().split(','),
  }).then(function () {
    // console.log("Document successfully written!");
  }).catch(function (error) {
    console.log("Error updating document: ", error);
  });

};

