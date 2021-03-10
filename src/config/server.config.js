const SERVER  = "http://localhost:8081/"
const AUTH = SERVER +"auth/"
const BANK = SERVER+"bank/"
const server={
    login:AUTH+"login",
    register:AUTH+"register",
    accesstoken:AUTH+"accesstoken",
    bloodbank:BANK+"list",
    searchuser:AUTH+"search?group=",
    singleUser:AUTH +"user/"
}
module.exports =server


/**
 *   // Your web app's Firebase configuration

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 */