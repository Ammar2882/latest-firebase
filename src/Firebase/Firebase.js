
import { getAnalytics } from "firebase/analytics";
import { FirestoreReducer } from "react-redux-firebase";
import firebase from "firebase/app"
import initializeApp from 'firebase/app'
import "firebase/auth"




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWFnPfRmJX5jyw6sANLqz5llPnb0_9xzg",
  authDomain: "ecommerce-28b8a.firebaseapp.com",
  projectId: "ecommerce-28b8a",
  storageBucket: "ecommerce-28b8a.appspot.com",
  messagingSenderId: "371236881912",
  appId: "1:371236881912:web:28946fb41cc4da765a820d",
  measurementId: "G-0RTC4PDQQ6"
};



// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = firebase.auth()

export default app



// export const db = getFirestore(app);
