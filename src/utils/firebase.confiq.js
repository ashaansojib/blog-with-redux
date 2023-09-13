import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0NHsrn66KeYS2XAvBnTCrflNf2ygpJfI",
  authDomain: "software-blog-bde8d.firebaseapp.com",
  projectId: "software-blog-bde8d",
  storageBucket: "software-blog-bde8d.appspot.com",
  messagingSenderId: "445905295172",
  appId: "1:445905295172:web:67947516539039a6396911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
export default app;