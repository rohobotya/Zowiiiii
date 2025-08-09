// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiivzpIEsKhfOe2EMY3m3OxBmXjdAL8pQ",
  authDomain: "zowi-9f8e8.firebaseapp.com",
  databaseURL: "https://zowi-9f8e8-default-rtdb.firebaseio.com",
  projectId: "zowi-9f8e8",
  storageBucket: "zowi-9f8e8.firebasestorage.app",
  messagingSenderId: "581091477130",
  appId: "1:581091477130:web:cfbb9585fc2bc53906cf73",
  measurementId: "G-6N1VNSGDTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
