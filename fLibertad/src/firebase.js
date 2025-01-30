// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcl_SCcjDkpPT2SXQwIr3EXAKyFAx71FM",
  authDomain: "miproyectofarmcia.firebaseapp.com",
  projectId: "miproyectofarmcia",
  storageBucket: "miproyectofarmcia.appspot.com", // ❌ Corregí esto, antes estaba mal
  messagingSenderId: "881973464213",
  appId: "1:881973464213:web:3544e425d8111ef632df9c",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore, Auth y Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Exportar
export { db, auth, storage };
