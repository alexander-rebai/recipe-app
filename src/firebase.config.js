// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBLi3nCFwR6tx_6Z60l12CSK69Bq_ivLoo",
  authDomain: "recipe-app-ba210.firebaseapp.com",
  projectId: "recipe-app-ba210",
  storageBucket: "recipe-app-ba210.appspot.com",
  messagingSenderId: "516151686802",
  appId: "1:516151686802:web:5e2bb175e51e05d33ad84b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }