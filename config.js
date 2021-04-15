import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDop1M5wfkFF0nTZ3-J5KLS6-TBU8VruM4",
    authDomain: "barter-system-20205.firebaseapp.com",
    projectId: "barter-system-20205",
    storageBucket: "barter-system-20205.appspot.com",
    messagingSenderId: "962605429214",
    appId: "1:962605429214:web:eae2c22cda0d99acd36d4f"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();