import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBLzPfms1ICwV0YZMoVGo_O7tDuqv8vplI",
  authDomain: "video-uplode.firebaseapp.com",
  databaseURL: "https://video-uplode.firebaseio.com",
  projectId: "video-uplode",
  storageBucket: "video-uplode.appspot.com",
  messagingSenderId: "306628252093"
};

firebase.initializeApp(config);

const storage = firebase.storage();
const db = firebase.database();

export { storage, db, firebase as default };
