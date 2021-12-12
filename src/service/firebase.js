// import firebase from "firebase/compat/app"


// TODO: Deal with 'auth component not yet registered' firebase error. keep in mind we're using Vue 3 and firebase v9



import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { getDatabase } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.ANALYTICS_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig)
console.log(firebaseApp.name)
console.log('auth: ')
export const auth = getAuth(firebaseApp) // this results in an Uncaught Error from index.esm2017.js
onAuthStateChanged(auth, user => { console.log(user)/* check status */ });
console.log(auth)
export const firebaseDatabase = getDatabase(firebaseApp)
export const googleAnalytics = getAnalytics(firebaseApp)
export const googleProvider = new GoogleAuthProvider()

// export const registerUser = function (email, password) {
//     createUserWithEmailAndPassword(auth, email, password)
//         .then(
//             () => {
//                 this.$router.replace("home");
//             }).catch(err => {
//                 alert(err.message);
//             })
//     }

// export const emailLogin = function (email, password) {
//     signInWithEmailAndPassword(auth, email, password)
//         .then(
//             () => {
//                 this.$router.replace("home");
//             })
//             .catch(err => {
//                 alert(err.message);}
//         );
// }

// export const logout = function (email, password) {
//     signOut(auth, email, password)
//         .then(
//             () => {
//                 this.$router.replace("home");
//             })
//             .catch(err => {
//                 alert(err.message);}
//         );
// }