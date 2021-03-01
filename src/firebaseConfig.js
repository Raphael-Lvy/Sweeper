// Your web app's Firebase configuration
import firebase from "firebase/app";
require('firebase/firestore');

export const firebaseConfig = {
    apiKey: "AIzaSyAdcy8IrAmVugOpa8tEyOW787tpUnQ7uks",
    authDomain: "yellow-sweep.firebaseapp.com",
    projectId: "yellow-sweep",
    storageBucket: "yellow-sweep.appspot.com",
    messagingSenderId: "615473978329",
    appId: "1:615473978329:web:9975e9f672b42f0b3357c8",
  };

 export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();