import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbU5YVivpm2nPjKdEmNN5Cv8kVHMipZdM",
    authDomain: "portafolio-a1fef.firebaseapp.com",
    projectId: "portafolio-a1fef",
    storageBucket: "portafolio-a1fef.appspot.com",
    messagingSenderId: "282901363021",
    appId: "1:282901363021:web:88d5cb1ee496a9e70a9f04"
});

const db = firebaseApp.firestore();

export { db };