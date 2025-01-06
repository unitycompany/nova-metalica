import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCm0N9VNANfmzK_GfJxx1regbzmmHJt2jo",
    authDomain: "novametalica-bb05f.firebaseapp.com",
    projectId: "novametalica-bb05f",
    storageBucket: "novametalica-bb05f.firebasestorage.app",
    messagingSenderId: "38158997573",
    appId: "1:38158997573:web:9dfe87a086f9e68082eb2c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
