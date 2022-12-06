// const firebase = require("firebase-admin");

// // Best practice: Get the credential file and db url from environment varible
// const serviceAccount = require("<path-to-service-account-credential.json>");
// const dbUrl = "https://<Your DB>.firebaseio.com"; //You’ll get the DB Url from Firebase Console

// module.exports = () => {
//   firebase.initializeApp({
//     credential: firebase.credential.cert(serviceAccount),
//     databaseURL: dbUrl,
//   });
//   console.info("Initialized Firebase SDK");
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtYb0I4aPnZKPbB4bbQ0VB7rpHZqha06s",
  authDomain: "wellbell-4a40d.firebaseapp.com",
  projectId: "wellbell-4a40d",
  storageBucket: "wellbell-4a40d.appspot.com",
  messagingSenderId: "33154837166",
  appId: "1:33154837166:web:cffc47a7ec9154036edb3f",
  measurementId: "G-5YXH5XPXZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
