// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyB3HR_SNHgbVur7QCTEt9AaDMRDGbIYt2M",
    authDomain: "my-app-auth-b8229.firebaseapp.com",
    projectId: "my-app-auth-b8229",
    storageBucket: "my-app-auth-b8229.firebasestorage.app",
    messagingSenderId: "251191198214",
    appId: "1:251191198214:web:3cfa99831f26ae59fdf987"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
