import * as firebase from 'firebase' ;



// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAyd_X2k8m5lK6VXG2kqvN55mSK2IW-rQ",
    authDomain: "developing-39072.firebaseapp.com",
    databaseURL: "https://developing-39072.firebaseio.com",
    projectId: "developing-39072",
    storageBucket: "developing-39072.appspot.com",
    messagingSenderId: "920414017701"
};


if(!firebase.apps.length)
{
    firebase.initializeApp(config);
}



const auth = firebase.auth();

export {
    auth
};