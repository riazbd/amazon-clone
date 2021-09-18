import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBa4tXgRO59j_WMTDmQh1lzY5PpaUP1h5I',
  authDomain: 'clone-fdfb4.firebaseapp.com',
  projectId: 'clone-fdfb4',
  storageBucket: 'clone-fdfb4.appspot.com',
  messagingSenderId: '829494098938',
  appId: '1:829494098938:web:6b1fe1696aba7213c98243',
  measurementId: 'G-2X7H2SBF1G',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
