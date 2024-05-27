// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "web-dev-85a8a.firebaseapp.com",
  projectId: "web-dev-85a8a",
  storageBucket: "web-dev-85a8a.appspot.com",
  messagingSenderId: "407629090984",
  appId: "1:407629090984:web:56736f7135d7e29afb729d",
  measurementId: "G-2TKSSJFC6P"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig.apiKey)
// const analytics = getAnalytics(app);

export default app;