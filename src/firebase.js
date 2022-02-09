import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYIKJyrbQK9-Zp1BdR7HMf3CPXbxfvr4U",
  authDomain: "netflix-builds-81c4c.firebaseapp.com",
  projectId: "netflix-builds-81c4c",
  storageBucket: "netflix-builds-81c4c.appspot.com",
  messagingSenderId: "7144610604",
  appId: "1:7144610604:web:555db5c56bc6392cadea89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
