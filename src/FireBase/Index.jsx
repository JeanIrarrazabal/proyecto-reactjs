import firebase from "firebase/app";
import "@firebase/firestore";


const app= firebase.initializeApp({

    apiKey: "AIzaSyD-d2R31avjd6harjQh2F5GvM3x1tWNKE0",
    authDomain: "proyecto-coderhouse-960ae.firebaseapp.com",
    projectId: "proyecto-coderhouse-960ae",
    storageBucket: "proyecto-coderhouse-960ae.appspot.com",
    messagingSenderId: "856090598960",
    appId: "1:856090598960:web:88b4ce6ecdca5122af17f5"

  });

  export const getFirebase = () => {
      return app;
  }

  export const getFirestore = () => {
      return firebase.firestore(app);
  }