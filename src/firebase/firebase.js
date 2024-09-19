// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth/web-extension";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAinncM7OuKMB2LM2c4gSRLjjc-qQ_IAH4",
    authDomain: "blog-e3874.firebaseapp.com",
    projectId: "blog-e3874",
    storageBucket: "blog-e3874.appspot.com",
    messagingSenderId: "78882001732",
    appId: "1:78882001732:web:eb75b30e791e46c633fd11",
    measurementId: "G-B9NRWM54W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const starage = getStorage();
export const db = getFirestore(app);