import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: "AIzaSyANGQl60EULLmdhEmeI0Lqhr2G2qiQ4WqE",
  authDomain: "zt-jumpstart.firebaseapp.com",
  databaseURL: "https://zt-jumpstart.firebaseio.com",
  projectId: "zt-jumpstart",
  storageBucket: "",
  messagingSenderId: "818204202137"
});

function connect(path) {
  return app.database().ref(path);
}

function auth() {
  return app.auth();
}

export default {connect, auth};