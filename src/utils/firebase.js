// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "viswam-370e7.firebaseapp.com",
  projectId: "viswam-370e7",
  storageBucket: "viswam-370e7.appspot.com",
  messagingSenderId: "342692446613",
  appId: "1:342692446613:web:8e44bea55760917d20f69c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);