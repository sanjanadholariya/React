// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa3V_r4WtPvTbwTwTmreeaRvbRpFAtTCY",
  authDomain: "realtime-contact-pr-11.firebaseapp.com",
  projectId: "realtime-contact-pr-11",
  storageBucket: "realtime-contact-pr-11.firebasestorage.app",
  messagingSenderId: "831938827327",
  appId: "1:831938827327:web:2d88c1880d8d6542c7948a",
  measurementId: "G-1SLMLQJJCM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
const analytics = getAnalytics(app);