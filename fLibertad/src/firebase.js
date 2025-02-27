// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzCN_69meoMTP9mAL4yDJcXFVEA3Pq0dA",
  authDomain: "clientes-26237.firebaseapp.com",
  databaseURL: "https://clientes-26237-default-rtdb.firebaseio.com",
  projectId: "clientes-26237",
  storageBucket: "clientes-26237.appspot.com",
  messagingSenderId: "320420249976",
  appId: "1:320420249976:web:d2962562d9377241abc88d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore, Auth y Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Exportar
export { db, auth, storage };
