import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "firebase/auth";

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
 