// ---------------------------==> All Imports <==------------------------------//
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.API_KEY)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAa5-hOZ4jbqU7KkK9m4-_ZIEKq8VmraHA",
    authDomain: "sir-ibrahim-website-clone.firebaseapp.com",
    projectId: "sir-ibrahim-website-clone",
    storageBucket: "sir-ibrahim-website-clone.firebasestorage.app",
    messagingSenderId: "359251321885",
    appId: "1:359251321885:web:76f5ad584397d632e612f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ---------------------------==> Sign Up <==------------------------------//

// btn add event "click"
const btn = document.getElementById('btn');
btn.addEventListener('click', signup);

function signup() {
    // const name = document.getElementById('name').value
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value
    console.log('email==>', email)
    console.log('password1==>', password)

    // Firebase Code
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log('user==>', user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage==>", errorMessage)
            // ..
        });
}

// ---------------------------==> Sign in <==------------------------------//

const nameup = document.getElementById('nameup');
const emailUp = document.getElementById('emailUp');
const passwordUp = document.getElementById('passwordUp');
const btnUp = document.getElementById('btnUp');

