// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4dUGkCFUjx4NTsoS9wwqUSlzPCWEsCMI",
  authDomain: "ema-john-with-firebase-a-ff79e.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-ff79e",
  storageBucket: "ema-john-with-firebase-a-ff79e.appspot.com",
  messagingSenderId: "905435859487",
  appId: "1:905435859487:web:1d231753fa835f4190e32a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;