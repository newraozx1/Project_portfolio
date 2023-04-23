// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmDqda5j71t4dxjZhFvhOmjPOvgJa89rA",
  authDomain: "breeznikport.firebaseapp.com",
  projectId: "breeznikport",
  storageBucket: "breeznikport.appspot.com",
  messagingSenderId: "996208728776",
  appId: "1:996208728776:web:30a2cb73aaa85944c0e3fd",
  measurementId: "G-7DYQ9X43QX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
