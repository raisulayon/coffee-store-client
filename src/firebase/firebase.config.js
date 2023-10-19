// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUOYdimhu0PaynG9gyEyhg3avbigMDzJ4",
  authDomain: "coffee-store-83f99.firebaseapp.com",
  projectId: "coffee-store-83f99",
  storageBucket: "coffee-store-83f99.appspot.com",
  messagingSenderId: "855426032255",
  appId: "1:855426032255:web:26d37cce29115a3161954a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;