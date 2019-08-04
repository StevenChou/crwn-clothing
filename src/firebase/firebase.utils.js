import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAUhHHzp-HUgaPfEcdl4CSXW6U8YCvNGmw',
  authDomain: 'crwn-db-e7c7a.firebaseapp.com',
  databaseURL: 'https://crwn-db-e7c7a.firebaseio.com',
  projectId: 'crwn-db-e7c7a',
  storageBucket: '',
  messagingSenderId: '519581112721',
  appId: '1:519581112721:web:690e8569d0383a94'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
