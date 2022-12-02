import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtYb0I4aPnZKPbB4bbQ0VB7rpHZqha06s",
  authDomain: "wellbell-4a40d.firebaseapp.com",
  projectId: "wellbell-4a40d",
  storageBucket: "wellbell-4a40d.appspot.com",
  messagingSenderId: "33154837166",
  appId: "1:33154837166:web:cffc47a7ec9154036edb3f",
  measurementId: "G-5YXH5XPXZ7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);