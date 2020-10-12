
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9aHF2vku8VvO3gcprzfj3-77fSSdZLf4",
  authDomain: "fb-clone-810b5.firebaseapp.com",
  databaseURL: "https://fb-clone-810b5.firebaseio.com",
  projectId: "fb-clone-810b5",
  storageBucket: "fb-clone-810b5.appspot.com",
  messagingSenderId: "821977256501",
  appId: "1:821977256501:web:4b8d4a6f3a20b37c72577c",
  measurementId: "G-Z12F2800TJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth , provider};
  export default db;