// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt_W7K6bD6RVB7V7SU2kE_lLtXwhRgwH8",
  authDomain: "facemovie-5756d.firebaseapp.com",
  projectId: "facemovie-5756d",
  storageBucket: "facemovie-5756d.appspot.com",
  messagingSenderId: "615966246004",
  appId: "1:615966246004:web:0158db014e843a5c5c7d21",
  measurementId: "G-68X7KMSNCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if(user !== null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});