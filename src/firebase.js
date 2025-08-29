// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB3HR_SNHgbVur7QCTEt9AaDMRDGbIYt2M",
  authDomain: "my-app-auth-b8229.firebaseapp.com",
  projectId: "my-app-auth-b8229",
  storageBucket: "my-app-auth-b8229.appspot.com", // ✅ fixed
  messagingSenderId: "251191198214",
  appId: "1:251191198214:web:3cfa99831f26ae59fdf987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ export db so you can use in SignupPage
