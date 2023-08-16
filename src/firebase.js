// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAf2wwilSosTvp80ID5_PLke8xus3Bh9E",
  authDomain: "yt-clone-b668b.firebaseapp.com",
  projectId: "yt-clone-b668b",
  storageBucket: "yt-clone-b668b.appspot.com",
  messagingSenderId: "14240196160",
  appId: "1:14240196160:web:ba62f04e777352883321a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };