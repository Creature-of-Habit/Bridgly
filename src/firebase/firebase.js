// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth/web-extension";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.APP_API_KEY,
    authDomain: import.meta.env.APP_AUTH_DOMAIN,
    projectId: import.meta.env.APP_PROJECT_ID,
    storageBucket: import.meta.env.APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.APP_MESSAGING_SENDING_ID,
    appId: import.meta.env.APP_ID,
    measurementId: import.meta.env.APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const starage = getStorage();
export const db = getFirestore(app);