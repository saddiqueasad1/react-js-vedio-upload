import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

const storage = firebase.storage();
const db = firebase.database();

export { storage, db, firebase as default };
