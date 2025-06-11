// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKpo3tyIJFfvqfCbXstCvGrYt1YMyZD0E",
  authDomain: "exclusive-64bf3.firebaseapp.com",
  projectId: "exclusive-64bf3",
  storageBucket: "exclusive-64bf3.firebasestorage.app",
  messagingSenderId: "804236430967",
  appId: "1:804236430967:web:37aa79485c29057ff68072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)