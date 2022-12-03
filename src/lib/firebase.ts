// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbMuPF_LMvuvvfWhCbFS8IexEZDwGkEOY",
  authDomain: "huiswerk-166b2.firebaseapp.com",
  projectId: "huiswerk-166b2",
  storageBucket: "huiswerk-166b2.appspot.com",
  messagingSenderId: "1056902216922",
  appId: "1:1056902216922:web:6062a9750df4f66d8539e3",
  measurementId: "G-1KFDVSJXM7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
