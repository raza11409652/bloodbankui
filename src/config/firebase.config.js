const firebase = require('firebase').default
var firebaseConfig = {
    apiKey: "AIzaSyBixhKRCi_LBvzUHkZkd7PpfnlrWliosZ4",
    authDomain: "blood-bank-a7cce.firebaseapp.com",
    projectId: "blood-bank-a7cce",
    storageBucket: "blood-bank-a7cce.appspot.com",
    messagingSenderId: "463210812929",
    appId: "1:463210812929:web:695b5bde440f5e26c85200",
    measurementId: "G-JBJCHKX212"
};
firebase.initializeApp(firebaseConfig)
const googleProvider =  new firebase.auth.GoogleAuthProvider;
const db = firebase.database()
const auth = firebase.auth()
export {db , auth , googleProvider}
