import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMA00L9OYPwyqGl3p5sSWLxuqtql3tle0",
  authDomain: "morty-project-59108.firebaseapp.com",
  projectId: "morty-project-59108",
  storageBucket: "morty-project-59108.appspot.com",
  messagingSenderId: "1026358426296",
  appId: "1:1026358426296:web:1eb05a376bd11eafc3124d"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()

const settings = { timestampsInSnapshots: true }
firestore.settings(settings)