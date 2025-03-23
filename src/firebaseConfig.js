import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANElMoKB05_f56JwAcm6BfnE89vECH5jo",
  authDomain: "sportive-backend.firebaseapp.com",
  projectId: "sportive-backend",
  storageBucket: "sportive-backend.firebasestorage.app",
  messagingSenderId: "947124268452",
  appId: "1:947124268452:web:e467175a11a37c293fe531",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
