import { createApp } from 'vue'
import App from './App.vue'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1d_-FYJ5Z2aqeDdxjJmjyRALga-fTwK8",
    authDomain: "projetqvti.firebaseapp.com",
    projectId: "projetqvti",
    storageBucket: "projetqvti.appspot.com",
    messagingSenderId: "1028930750631",
    appId: "1:1028930750631:web:004dcb0b1469659d72f382"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


createApp(App).mount('#app')
