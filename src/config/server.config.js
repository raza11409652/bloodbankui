// const SERVER  = "http://localhost:8090/" //Production server
const SERVER = "https://bloodbanklpu.herokuapp.com/"
const AUTH = SERVER + "auth/"
const BANK = SERVER + "bank/"
const CAMP = SERVER + "camp/"
const server = {
    login: AUTH + "login",
    register: AUTH + "register",
    isUserExist: AUTH + "isUserExist",
    accesstoken: AUTH + "accesstoken",
    bloodbank: BANK + "list",
    searchuser: AUTH + "search?group=",
    singleUser: AUTH + "user/",
    bloodRequest: SERVER + "request/new/request",
    getBlood: SERVER + "request/requested",
    newCamp : CAMP + "new",
    getcamp :CAMP,
    markRequest:SERVER +"request/mark"

}
module.exports = server


/**
 *   // Your web app's Firebase configuration

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 */