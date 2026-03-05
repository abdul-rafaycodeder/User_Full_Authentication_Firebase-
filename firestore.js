// all import

import {
  getFirestore,
  doc,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from "./firebase.js";

import { app } from "./index.js";

const db = getFirestore(app);
console.log("db=>", db);


async function setData() {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });
}

setData()

console.log('nahi chal raha')