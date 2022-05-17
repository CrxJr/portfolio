import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu2beyYthYIk-gCDx20CyHWIeabOSxj6c",
    authDomain: "cristian-canc.firebaseapp.com",
    databaseURL: "https://cristian-canc-default-rtdb.firebaseio.com",
    projectId: "cristian-canc",
    storageBucket: "cristian-canc.appspot.com",
    messagingSenderId: "430580082942",
    appId: "1:430580082942:web:501be3ed164d695d20ddaf",
    measurementId: "G-V6QGC3L98W"
};
initializeApp(firebaseConfig);

export const db = getFirestore();