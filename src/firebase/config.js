import firebase from "firebase/compat/app";
// SDKs for Firebase products that you want to use
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-7Z1_7C2D7sgOvCT5g4naVaJwjTXPUXQ",
  authDomain: "fotogallerie-8f729.firebaseapp.com",
  projectId: "fotogallerie-8f729",
  storageBucket: "fotogallerie-8f729.appspot.com",
  messagingSenderId: "198492820751",
  appId: "1:198492820751:web:c6a93e0b99c18a8e4e5a7a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage and firestore service
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectFirestore, timestamp} 