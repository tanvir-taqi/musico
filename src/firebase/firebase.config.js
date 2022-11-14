// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkXu19xliZZJmGLK85QccAH2EN0mLzN9k",
  authDomain: "musico-dfefd.firebaseapp.com",
  projectId: "musico-dfefd",
  storageBucket: "musico-dfefd.appspot.com",
  messagingSenderId: "523501306174",
  appId: "1:523501306174:web:8853cc9501e413feaeec6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;