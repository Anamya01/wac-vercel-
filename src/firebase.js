// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSI8TSY67GU9vrlwJWYDXcKG4eackVdZ8",
  authDomain: "wacauth-66edb.firebaseapp.com",
  projectId: "wacauth-66edb",
  storageBucket: "wacauth-66edb.appspot.com",
  messagingSenderId: "351024297977",
  appId: "1:351024297977:web:df92865f166b783df52f28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);