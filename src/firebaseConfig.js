// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration (replace with your Firebase project's config)
const firebaseConfig = {
  apiKey: "AIzaSyCaQQ0jGWidIKnZ71Cvoq2rF4HdUDpp4SM",
  authDomain: "vitalhitblog.firebaseapp.com",
  projectId: "vitalhitblog",
  storageBucket: "vitalhitblog.appspot.com",
  messagingSenderId: "660796231927",
  appId: "1:660796231927:web:82a68266dc802b72e303f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const storage = getStorage(app); 

export { db };
export { storage };
