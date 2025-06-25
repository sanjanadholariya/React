// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3vpdnKbH-R75j1qjXJ8AsXjxdd2cAdwk",
  authDomain: "react-realtime-crud.firebaseapp.com",
  projectId: "react-realtime-crud",
  storageBucket: "react-realtime-crud.firebasestorage.app",
  messagingSenderId: "506384966456",
  appId: "1:506384966456:web:16721f5010e008d12e57cd",
  measurementId: "G-2PVMM92E6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
const analytics = getAnalytics(app);