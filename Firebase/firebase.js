// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-aYEib7Iz9TRC455Cxdmmpk_j5zcR-OY",
  authDomain: "flashorcap.firebaseapp.com",
  databaseURL: "https://flashorcap-default-rtdb.firebaseio.com",
  projectId: "flashorcap",
  storageBucket: "flashorcap.appspot.com",
  messagingSenderId: "887678688008",
  appId: "1:887678688008:web:9030ec3e4ac174e0c3aabd",
  measurementId: "G-V99ED9XE5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);