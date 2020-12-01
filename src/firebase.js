import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDNyBoDyBUn9wzwDjKh0__vo86n5m1Ij2I",
    authDomain: "e-clone-b7ac7.firebaseapp.com",
    databaseURL: "https://e-clone-b7ac7.firebaseio.com",
    projectId: "e-clone-b7ac7",
    storageBucket: "e-clone-b7ac7.appspot.com",
    messagingSenderId: "645213394866",
    appId: "1:645213394866:web:6bbca8499c796af4dff6ab"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth } ;