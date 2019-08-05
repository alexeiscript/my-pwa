import * as firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAhTVn0uk-77QD6ba4I7BKlWr-0lArRFVE",
    authDomain: "my-pwa-65784.firebaseapp.com",
    databaseURL: "https://my-pwa-65784.firebaseio.com",
    projectId: "my-pwa-65784",
    storageBucket: "",
    messagingSenderId: "56115858869",
    appId: "1:56115858869:web:6b33aeba8a9001e5"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("todos")
