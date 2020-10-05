
import * as firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCzOhD_egjSFDKpDSe_cY9ENTPFLhqfAss",
    authDomain: "fir-pract-1ccca.firebaseapp.com",
    databaseURL: "https://fir-pract-1ccca.firebaseio.com",
    projectId: "fir-pract-1ccca",
    storageBucket: "fir-pract-1ccca.appspot.com",
    messagingSenderId: "940433420188",
    appId: "1:940433420188:web:e3ba8ed219b2df35282259",
    measurementId: "G-7DG8PRL6JY"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  