import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDeB_-1xSHM959WW-3AEK05RblvlOEVu80",
  authDomain: "authentication-firebase-abffa.firebaseapp.com",
  databaseURL:
    "https://authentication-firebase-abffa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "authentication-firebase-abffa",
  storageBucket: "authentication-firebase-abffa.appspot.com",
  messagingSenderId: "923325881363",
  appId: "1:923325881363:web:ea50eb3b7864c03154f3e6",
  measurementId: "G-DG4QHTHK7Q",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
