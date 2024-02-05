// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

const login = document.querySelector(".login");

login.addEventListener("click", () => {
  googleLogin();
});

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCQ65PnSfcAfX7hfS99BfpdZ-kKewHF4x0",

  authDomain: "news-page-d400b.firebaseapp.com",

  projectId: "news-page-d400b",

  storageBucket: "news-page-d400b.appspot.com",

  messagingSenderId: "620219561781",

  appId: "1:620219561781:web:38d4edd65650f3540c7e7c",

  measurementId: "G-87WML4YE98",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth();
function googlelogin() {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
