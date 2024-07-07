import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
});
// const app = initializeApp({
//   apiKey: "AIzaSyAlthHaCY4TmsIvKNRnjdwMhFPtw6KY2_E",
//   authDomain: "video-sharing-web-81a82.firebaseapp.com",
//   databaseURL: "https://video-sharing-web-81a82-default-rtdb.firebaseio.com",
//   projectId: "video-sharing-web-81a82",
//   storageBucket: "video-sharing-web-81a82.appspot.com",
//   messagingSenderId: "1000433174681",
//   appId: "1:1000433174681:web:e0f7b7a38bed4ebe025008",
//   measurementId: "G-1SVCG73BYF",
// });

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const gprovider = new GoogleAuthProvider();
gprovider.setCustomParameters({ prompt: "select_account" });

export {
  auth as fireauth,
  storage as fireStorage,
  db as fireDB,
  app as fireapp,
  gprovider,
};
