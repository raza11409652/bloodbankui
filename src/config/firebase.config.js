const firebase = require('firebase').default
var firebaseConfig = {
    apiKey: "AIzaSyBCZI4E7yKxsolLiDW5e3yRpvOSFFc-QwY",
    authDomain: "appweb-7fa44.firebaseapp.com",
    databaseURL: "https://appweb-7fa44.firebaseio.com",
    projectId: "appweb-7fa44",
    storageBucket: "appweb-7fa44.appspot.com",
    messagingSenderId: "158096715008",
    appId: "1:158096715008:web:815b2c41df8c8ad1cdd7e5"
};
firebase.initializeApp(firebaseConfig)
export const  db = firebase.database()
