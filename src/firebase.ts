import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOCJIf6eSlcMaoWmalF_MIJqpOllojdrI",
    authDomain: "mk-projects-4df06.firebaseapp.com",
    projectId: "mk-projects-4df06",
    storageBucket: "mk-projects-4df06.appspot.com",
    messagingSenderId: "811391197977",
    appId: "1:811391197977:web:3d16b8935e731d567d5b88"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
