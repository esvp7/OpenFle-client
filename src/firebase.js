import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNuSXFl2THl61HdIjG4jdsi0Dw9ia01HY",
  authDomain: "openfle-chat.firebaseapp.com",
  databaseURL: "https://openfle-chat-default-rtdb.firebaseio.com",
  projectId: "openfle-chat",
  storageBucket: "openfle-chat.appspot.com",
  messagingSenderId: "36513369585",
  appId: "1:36513369585:web:b265ff7ec3899b1d7c4850"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };