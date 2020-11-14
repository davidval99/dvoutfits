import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAmzRCmZCm1-vZeLgMAGK3-imRkxzhnE0",
    authDomain: "dvoutfits-d6abd.firebaseapp.com",
    databaseURL: "https://dvoutfits-d6abd.firebaseio.com",
    projectId: "dvoutfits-d6abd",
    storageBucket: "dvoutfits-d6abd.appspot.com",
    messagingSenderId: "161402927116",
    appId: "1:161402927116:web:4056c7c9c07f9722581629"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore()
