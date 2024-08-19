// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsFmneCVxFPd6sUeOcLe29JqT5HXF9Dc0",
  authDomain: "fbase-6f382.firebaseapp.com",
  projectId: "fbase-6f382",
  storageBucket: "fbase-6f382.appspot.com",
  messagingSenderId: "481344811919",
  appId: "1:481344811919:web:9d06d9c10c4ec37f5951fa",
  measurementId: "G-8ZQQ3HQ2FF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
