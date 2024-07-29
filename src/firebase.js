import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4FZ2P0wFthmHWuaGzdgkRJWaSlH5bZkY",
  authDomain: "psychoboost-8fbf3.firebaseapp.com",
  projectId: "psychoboost-8fbf3",
  storageBucket: "psychoboost-8fbf3.appspot.com",
  messagingSenderId: "971379422055",
  appId: "1:971379422055:web:a7d0392ef35fbc00c575c2",
  measurementId: "G-3DHPRVXTQM",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

// Enable offline data persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    console.error("Failed to enable offline persistence: multiple tabs open.");
  } else if (err.code === "unimplemented") {
    console.error(
      "Failed to enable offline persistence: browser does not support it."
    );
  }
});

const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, db, signInWithGoogle };
