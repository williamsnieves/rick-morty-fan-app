import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { credentials, settings } from "../config/firebase.js";

firebase.initializeApp(credentials);

const firestore = firebase.firestore();
firestore.settings(settings);
const auth = getAuth();

export { firestore, auth, signInWithEmailAndPassword };
