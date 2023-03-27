// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAusX9A7plMbZLn4dmOxeAvhQDHJPbUfws",
  authDomain: "query-95b67.firebaseapp.com",
  databaseURL: "https://query-95b67-default-rtdb.firebaseio.com",
  projectId: "query-95b67",
  storageBucket: "query-95b67.appspot.com",
  messagingSenderId: "635976398340",
  appId: "1:635976398340:web:d3190bc79d420c2fca2751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
