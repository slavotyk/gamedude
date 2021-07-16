import { uploadFile } from './helpers';
// import  firebase from "firebase/app";
import firebase from "firebase/app";

import 'firebase/firestore'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth';  // If using Firebase storage
// import {webpConverter} from "../../components/common/webpConverter/webpConverter";

export const createPost = async (post) => {

    const db = firebase.firestore();
    const firestorePostRef = db.collection('posts');

    const storage = firebase.storage();
    const storageRef = storage.ref().child('posts');

    // console.log('we are in my friend');
    // console.log(post.background);
    // post.background = webpConverter(post.background);

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

};

export const updatePost = async (post) => {

    const db = firebase.firestore();
    const firestorePostRef = db.collection('posts').doc(post.postId);
    // console.log(firestorePostRef);
    // const storage = firebase.storage();
    // const storageRef = storage.ref().child('posts');

    // console.log('we are in my friend');
    // console.log(post.background);
    // post.background = webpConverter(post.background);

    // const backgroundUrl = await uploadFile(storageRef, post.background);

    // const authorId = firebase.auth().currentUser.uid;

    // console.log(post);
    // console.log(await firestorePostRef.get())

    await firestorePostRef.update({
        title: post.title,
        // gameId: post.gameId,
        // gameName: post.gameName,
        content: post.content,
        // background: backgroundUrl,
        // authorId: authorId,
        isPR: post.isPR,
        linkToPR: post.linkToPR,
        modifiedAt: new Date(),
    });

};
