import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyD9GAYem1gyBuBWX0odS4AyomiUg_CY03c",
  authDomain: "e-clone-432a5.firebaseapp.com",
  databaseURL: "https://e-clone-432a5.firebaseio.com",
  projectId: "e-clone-432a5",
  storageBucket: "e-clone-432a5.appspot.com",
  messagingSenderId: "887709880659",
  appId: "1:887709880659:web:0c0bcbe983b1022f9591a6",
  measurementId: "G-63PDKMLL0L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };