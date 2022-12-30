// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3e9B9_JExvB8kLOUqIkznxl6a0jkFfrg",
    authDomain: "imam-social-media.firebaseapp.com",
    projectId: "imam-social-media",
    storageBucket: "imam-social-media.appspot.com",
    messagingSenderId: "952519605605",
    appId: "1:952519605605:web:aa9d3daabd9c56fbfd358c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;