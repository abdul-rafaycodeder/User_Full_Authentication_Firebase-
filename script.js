// ---------------------------==> All Imports <==------------------------------//
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

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
const name = document.getElementById('name');


// btn add event "click"
const btn = document.getElementById('btn');
btn.addEventListener('click', signup);

function signup() {
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1');
    console.log(email)
    console.log(password1)
}

// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed up 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });


