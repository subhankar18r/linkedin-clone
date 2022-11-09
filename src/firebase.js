import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDslswypETA2cT2evDF7UCipAwMeVgBSfg",
  authDomain: "linkedin-clone-90fe6.firebaseapp.com",
  projectId: "linkedin-clone-90fe6",
  storageBucket: "linkedin-clone-90fe6.appspot.com",
  messagingSenderId: "340164431330",
  appId: "1:340164431330:web:7942c79494b91e50ecfdbb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

export { auth, db };
export default app;
