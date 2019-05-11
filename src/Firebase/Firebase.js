import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'todos-auth-93649.firebaseapp.com',
  databaseURL: 'https://todos-auth-93649.firebaseio.com',
  projectId: 'todos-auth-93649',
  storageBucket: 'todos-auth-93649.appspot.com',
  messagingSenderId: '861873728337',
  appId: '1:861873728337:web:1ba769b42b09d06b'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
