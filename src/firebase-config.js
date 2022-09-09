// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEIbxbKSKIc3YWd8AZz6Aptxfoaw2gv0E",
  authDomain: "pragmatic-ruler-360315.firebaseapp.com",
  projectId: "pragmatic-ruler-360315",
  storageBucket: "pragmatic-ruler-360315.appspot.com",
  messagingSenderId: "610286852627",
  appId: "1:610286852627:web:1975cfec918aa2a4dd3de6",
  measurementId: "G-5WDNT7MFEE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
