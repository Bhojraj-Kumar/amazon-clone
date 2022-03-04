// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQGQ-q_xo7l8ivkTMXMm6mYffORejUiA",
  authDomain: "clone-a9f37.firebaseapp.com",
  projectId: "clone-a9f37",
  storageBucket: "clone-a9f37.appspot.com",
  messagingSenderId: "727635951115",
  appId: "1:727635951115:web:a2f3971da67de4add6d10e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};


