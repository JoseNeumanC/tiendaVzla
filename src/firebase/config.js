// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs5xDLB_rRhBuYJYKWRkK1JwSkmAPKQCw",
  authDomain: "neuman-project.firebaseapp.com",
  projectId: "neuman-project",
  storageBucket: "neuman-project.appspot.com",
  messagingSenderId: "679542321216",
  appId: "1:679542321216:web:c8fd55a5d9336e00966fa5"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);