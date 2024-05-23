
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBaay843VsIWL75mI3bLAFu7XLF-q1vNI4",
  authDomain: "camaro-64765.firebaseapp.com",
  databaseURL: "https://camaro-64765-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "camaro-64765",
  storageBucket: "camaro-64765.appspot.com",
  messagingSenderId: "47364984897",
  appId: "1:47364984897:web:09b774d9650f88c80636c0",
  measurementId: "G-CQ3GPVKEZQ"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
