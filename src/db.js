import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
         .initializeApp({
           apiKey: "AIzaSyC0szEc8XkhVNecLMdLNUGvMpInC66rWXw",
           authDomain: "quanium-deploy.firebaseapp.com",
           databaseURL: "https://quanium-deploy.firebaseio.com",
           projectId: "quanium-deploy",
           storageBucket: "quanium-deploy.appspot.com",
           messagingSenderId: "510479508996",
           appId: "1:510479508996:web:83cbd13c06a32965",
         })
         .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
// const { Timestamp, GeoPoint } = firebase.firestore;
// export { Timestamp, GeoPoint };

// // if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true });
