import firebase from "firebase/compat/app";
// SDKs for Firebase products that you want to use
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClkh1lQu7REn1qbUfGZREU9zK8LeEja4Y",
  authDomain: "fotogallerie-2.firebaseapp.com",
  projectId: "fotogallerie-2",
  storageBucket: "fotogallerie-2.appspot.com",
  messagingSenderId: "577461955361",
  appId: "1:577461955361:web:6f3b352592d57f2fd46c60"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage and firestore service
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectFirestore, timestamp} 