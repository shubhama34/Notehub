// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPHnlD3sFvDRH1zSThQRk-BAuubj5Qvuw",
    authDomain: "notehub-426405.firebaseapp.com",
    projectId: "notehub-426405",
    storageBucket: "notehub-426405.appspot.com",
    messagingSenderId: "1061549936973",
    appId: "1:1061549936973:web:3a0de909bde775b261e704",
    measurementId: "G-RL5FFDVC7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app);