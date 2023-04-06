// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQkvDaZhWjZgB6Vc-hivlk2Fzj24N_8OU",
  authDomain: "versititwo.firebaseapp.com",
  projectId: "versititwo",
  storageBucket: "versititwo.appspot.com",
  messagingSenderId: "391768495569",
  appId: "1:391768495569:web:94833e39c0740499393cf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
