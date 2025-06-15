import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAii6zrWsVtPY-jgZUIAPKqS9UjUmgIs8I",
  authDomain: "yt-nes.firebaseapp.com",
  projectId: "yt-nes",
  storageBucket: "yt-nes.appspot.com",
  messagingSenderId: "1014646043005",
  appId: "1:1014646043005:web:d5ec9b68bc9d8ea9405c14",
  measurementId: "G-T65HKDX21X"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);