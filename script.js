// ---------------------------==> All Imports <==------------------------------//
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.API_KEY)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
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

// reload page alwase showing user email
onAuthStateChanged(auth, (user) => {
    if (user) {
        userEmail.innerHTML = user.email
    } else {

    }
});

// ---------------------------==> Sign Up <==------------------------------//

// View user email and userpassword
const userEmail = document.getElementById('userEmail')

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
            userEmail.innerHTML = user.email
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMessage==>", errorMessage)

        });
}

// ---------------------------==> Sign in <==------------------------------//

// btnUp add click event
const btnUp = document.getElementById('btnUp');
btnUp.addEventListener('click', signin)

function signin() {
    const emailUp = document.getElementById('emailUp').value
    const passwordUp = document.getElementById('passwordUp').value


    signInWithEmailAndPassword(auth, emailUp, passwordUp)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            userEmail.innerHTML = user.email
            userEmail.style.color = "green"
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            userEmail.innerHTML = errorCode;
            userEmail.style.color = "red"
            console.log(errorMessage)
        });
}

// ---------------------------==> Sign out <==------------------------------//

// SignOut button
const logout = document.getElementById('logout');

// SignOut button add event
logout.addEventListener('click', logoutFunction);

function logoutFunction() {
    signOut(auth).then(() => {
        alert('Sign-out successful');
        userEmail.innerHTML = ''
    }).catch((error) => {
        alert('nahi')
    });
}