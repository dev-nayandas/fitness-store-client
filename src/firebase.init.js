// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApLmKW6YtsUGpBeBX-HUn-8w_sCTGast8",
  authDomain: "fintness-store.firebaseapp.com",
  projectId: "fintness-store",
  storageBucket: "fintness-store.appspot.com",
  messagingSenderId: "77239821581",
  appId: "1:77239821581:web:4951574383c02e06fcbc44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;