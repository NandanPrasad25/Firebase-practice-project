/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBQujRPqNeLHOELieAzplmUE8tUMI06D7o",
  authDomain: "fir-project-1-524dd.firebaseapp.com",
  projectId: "fir-project-1-524dd",
  storageBucket: "fir-project-1-524dd.appspot.com",
  messagingSenderId: "15495052761",
  appId: "1:15495052761:web:11fbc3640792cc0b8cedc8",
  measurementId: "G-W692PXS6XK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
