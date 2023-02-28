import firebase from './firebase/compat/app';
import firestore from './firebase/compat/firestore';
import auth from './firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1Ydplb7XLnJGmkimNfwdzrr4q7_PIcuw",
    authDomain: "linkedin-clone-10bb9.firebaseapp.com",
    projectId: "linkedin-clone-10bb9",
    storageBucket: "linkedin-clone-10bb9.appspot.com",
    messagingSenderId: "744188794196",
    appId: "1:744188794196:web:13475b879cc55652eca4c1",
    measurementId: "G-0F7283XQ7G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const authApp = firebaseApp.auth();

  export { db, authApp };