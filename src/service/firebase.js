// import firebase from "firebase/compat/app"
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

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

export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDatabase = getDatabase(firebaseApp)
export const googleAnalytics = getAnalytics(firebaseApp)
export const googleProvider = new GoogleAuthProvider()

export const registerUser = function (email, password) {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(
            () => {
                this.$router.replace("home");
            }).catch(err => {
                alert(err.message);
            })
    }

export const emailLogin = function (email, password) {
    signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(
            () => {
                this.$router.replace("home");
            })
            .catch(err => {
                alert(err.message);}
        );
}

export const logout = function (email, password) {
    signOut(firebaseAuth, email, password)
        .then(
            () => {
                this.$router.replace("home");
            })
            .catch(err => {
                alert(err.message);}
        );
}