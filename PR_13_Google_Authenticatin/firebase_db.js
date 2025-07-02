// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDatceMbIWbd1eWeBea_PaK6_Gjiy-r_Nc",
  authDomain: "authentication-ff0d2.firebaseapp.com",
  projectId: "authentication-ff0d2",
  storageBucket: "authentication-ff0d2.firebasestorage.app",
  messagingSenderId: "303871720447",
  appId: "1:303871720447:web:83c59470c16ca72da5c5ca",
  measurementId: "G-T7NCE0R5J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const getauth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider;