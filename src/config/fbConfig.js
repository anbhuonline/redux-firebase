import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAgQl-deLr55smDa9wyUChmcf4wXtczJLk",
  authDomain: "projectplans-reduxfbase.firebaseapp.com",
  databaseURL: "https://projectplans-reduxfbase.firebaseio.com",
  projectId: "projectplans-reduxfbase",
  storageBucket: "projectplans-reduxfbase.appspot.com",
  messagingSenderId: "886315399247",
  appId: "1:886315399247:web:756993bb3ebc020aa7523a",
  measurementId: "G-5B6Y83HM46",
};

firebase.initializeApp(config);
firebase.firestore().settings({});
// firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
