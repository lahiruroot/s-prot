// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBHwutx_25w3ETdBC1xHhMJBoiat9_Yuu8",
    authDomain: "portfolio-def03.firebaseapp.com",
    projectId: "portfolio-def03",
    storageBucket: "portfolio-def03.appspot.com",
    messagingSenderId: "938647648218",
    appId: "1:938647648218:web:bb739e24b6bc38d82d32e3",
    measurementId: "G-ZKG3077J7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage, };