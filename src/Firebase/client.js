import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6_0RJ36KYRk8wd50g4D0vIPUxflQ8PS8",
  authDomain: "proyectoreactjs-d6a7c.firebaseapp.com",
  projectId: "proyectoreactjs-d6a7c",
  storageBucket: "proyectoreactjs-d6a7c.appspot.com",
  messagingSenderId: "277492692759",
  appId: "1:277492692759:web:b14c87c7a785161521e952"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)