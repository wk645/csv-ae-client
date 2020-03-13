import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA80nc5zXs51_llQyrs6yFiXudRvCpXft0",
    authDomain: "aeexpenses-19ca3.firebaseapp.com",
    databaseURL: "https://aeexpenses-19ca3.firebaseio.com",
    storageBucket: "aeexpenses-19ca3.appspot.com",
    messagingSenderId: "900899645645"
};

const fire = firebase.initializeApp(config);
export default fire;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <
// script src = "/__/firebase/7.11.0/firebase-app.js" > < /script>

//     <
//     !--TODO: Add SDKs
// for Firebase products that you want to use
// https: //firebase.google.com/docs/web/setup#available-libraries -->
//     <
//     script src = "/__/firebase/7.11.0/firebase-analytics.js" > < /script>

//     <
//     !--Initialize Firebase -->
//     <
//     script src = "/__/firebase/init.js" > < /script>