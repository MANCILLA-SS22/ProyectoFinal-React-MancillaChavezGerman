import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCIe2hAAtRbnJLfEczSpQXQLoP8nB-G5oE",
    authDomain: "tienda-43240.firebaseapp.com",
    projectId: "tienda-43240",
    storageBucket: "tienda-43240.appspot.com",
    messagingSenderId: "758411884917",
    appId: "1:758411884917:web:115e143636c9b3c96efb3c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)