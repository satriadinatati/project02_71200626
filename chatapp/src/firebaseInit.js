// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCesb1txJEwO-sNEiLPjm0ZAdHwCh4R0-Y",
  authDomain: "vuefirestore-666d3.firebaseapp.com",
  projectId: "vuefirestore-666d3",
  storageBucket: "vuefirestore-666d3.appspot.com",
  messagingSenderId: "403839166612",
  appId: "1:403839166612:web:94e7545d7c5dcbd8edac81",
  measurementId: "G-FS5XRVKD7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// const analytics = getAnalytics(app);