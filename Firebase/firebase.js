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
  appId: "1:887678688008:web:0f1112bcea3c76ecc3aabd",
  measurementId: "G-YC0P2F61L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Test Code of accessing Firebase from here (uses Cloud Firestore Lite SDK to retrieve a list of data):

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
