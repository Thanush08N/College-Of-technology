// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAueyeJguOVpxWLDeDK91YPOLdM09jpuw",
  authDomain: "cot-jaffna.firebaseapp.com",
  projectId: "cot-jaffna",
  storageBucket: "cot-jaffna.appspot.com",
  messagingSenderId: "165945950144",
  appId: "1:165945950144:web:1874146f5006cb39425225",
  measurementId: "G-3DYRW6LXJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);