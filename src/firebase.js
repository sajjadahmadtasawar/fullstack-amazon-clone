// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAhMhyYjYItWxk_cNNvnefIXaefvqPVYyE',
  authDomain: 'clone-34fa0.firebaseapp.com',
  projectId: 'clone-34fa0',
  storageBucket: 'clone-34fa0.appspot.com',
  messagingSenderId: '305229967601',
  appId: '1:305229967601:web:1469a24e4a9f2233043950',
  measurementId: 'G-ZCF7NL241E',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
