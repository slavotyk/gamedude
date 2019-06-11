import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNgrCAoxkBMU0FSRDgzY7B0CfFslBbFZg",
  authDomain: "gamedude-7f1f1.firebaseapp.com",
  databaseURL: "https://gamedude-7f1f1.firebaseio.com",
  projectId: "gamedude-7f1f1",
  storageBucket: "gamedude-7f1f1.appspot.com",
  messagingSenderId: "770035921761",
  appId: "1:770035921761:web:8e75d956a8814cb5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase


