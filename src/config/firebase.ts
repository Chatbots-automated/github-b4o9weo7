import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmBmiy1so69bAngcCfpIsMoe_ik9tE4no",
  authDomain: "elida-tanning.firebaseapp.com",
  projectId: "elida-tanning",
  storageBucket: "elida-tanning.firebasestorage.app",
  messagingSenderId: "1090507221137",
  appId: "1:1090507221137:web:51a5b7d106f198d5b0b730",
  measurementId: "G-ER8N0J8ZWT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Connect to emulators in development
if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
}

// Configure additional auth providers
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export { provider as googleAuthProvider };