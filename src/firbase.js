// 
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBz1C0sTHmpZu-dS0xnf9HpSQ5FcnFFYqk",
  authDomain: "auth-16c2a.firebaseapp.com",
  projectId: "auth-16c2a",
  storageBucket: "auth-16c2a.firebasestorage.app",
  messagingSenderId: "1051879266497",
  appId: "1:1051879266497:web:d3dfd7c645dc556bed1c40"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);