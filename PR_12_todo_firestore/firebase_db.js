// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRghX7IZ2Gtimunc4NkatXSqmw0M1omw8",
  authDomain: "firestore-todo-pr-12.firebaseapp.com",
  projectId: "firestore-todo-pr-12",
  storageBucket: "firestore-todo-pr-12.appspot.com",
  messagingSenderId: "1083712910584",
  appId: "1:1083712910584:web:f9ff0c61e32363098a370d",
  measurementId: "G-D15Q4F4PLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
