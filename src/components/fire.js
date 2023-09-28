import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuuX9jtSOPksv_33A9fOec2o_rTCH_5po",
    authDomain: "movie-insider-c8a53.firebaseapp.com",
    projectId: "movie-insider-c8a53",
    storageBucket: "movie-insider-c8a53.appspot.com",
    messagingSenderId: "160880691681",
    appId: "1:160880691681:web:351933416390ce0fd3aaa0",
    measurementId: "G-VD9T51QRY9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);
