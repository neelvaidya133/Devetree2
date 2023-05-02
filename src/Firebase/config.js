import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhvHYhUoQZ4EFzhbnv4a1kL23bJ8CkcTE",
  authDomain: "devetree-bc48b.firebaseapp.com",
  projectId: "devetree-bc48b",
  storageBucket: "devetree-bc48b.appspot.com",
  messagingSenderId: "526584445614",
  appId: "1:526584445614:web:d61a312f40ac769eed4b3f",
  measurementId: "G-P3X7WCMSC8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
