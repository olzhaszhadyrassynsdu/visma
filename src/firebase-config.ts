// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJjmx63mk8JtQ01KnqWOREK5-aADmmqdU",
  authDomain: "chatroom-6b950.firebaseapp.com",
  projectId: "chatroom-6b950",
  storageBucket: "chatroom-6b950.appspot.com",
  messagingSenderId: "1021912369528",
  appId: "1:1021912369528:web:b9272747b453d57cbb608d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
