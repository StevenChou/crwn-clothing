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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // uid 表示登入的那個人
  // ＊＊不管有沒有都會回傳資料
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // 不存在就新建一筆
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
