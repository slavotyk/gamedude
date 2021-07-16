import {uploadFile} from './helpers';
// import {getFirestore} from "redux-firestore";
import firebase from "firebase/app";
import 'firebase/firestore'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage



export const createGame = async (game) => {
  console.log(game);
  const db = firebase.firestore();
  const firestoreGameRef = db.collection('games');

  // connecting to firebase
  const storageRef = firebase.storage().ref();

  if ((game.background.length === 0) || (game.background === '')) {
    delete game.background;
  } else {
    // uploading new img
    game.background = await uploadFile(storageRef, game.background);
  }

  if ((game.poster.length === 0) || (game.poster === '')) {
    delete game.poster;
  } else {

    // uploading new img
    game.poster = await uploadFile(storageRef, game.poster);
  }
  await firestoreGameRef.add({
    ...game,
    keywords: game.keywords.toLowerCase().split(','),
    createdAt: new Date()
  }).then(function () {
    // console.log("Document successfully written!");
  }).catch(function (error) {
    console.log("Error updating document: ", error);
  });
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
