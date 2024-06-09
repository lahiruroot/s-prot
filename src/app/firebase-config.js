// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBSH2dTuKfThczsAB2_-TEWvWnl3Ooh-Ng",
    authDomain: "waltons-b4f87.firebaseapp.com",
    projectId: "waltons-b4f87",
    storageBucket: "waltons-b4f87.appspot.com",
    messagingSenderId: "455315002622",
    appId: "1:455315002622:web:a1a2024352e89a349dc1af",
    measurementId: "G-08K6RE971M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage, };