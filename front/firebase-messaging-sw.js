importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/init.js');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn7GAZJL3717JCLyB4bam01Yo5EE0jPhQ",
    authDomain: "webpush-e9c3d.firebaseapp.com",
    projectId: "webpush-e9c3d",
    storageBucket: "webpush-e9c3d.appspot.com",
    messagingSenderId: "740768659038",
    appId: "1:740768659038:web:f2b480c750b8e98035e6cf",
    measurementId: "G-T65D0NMC7V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.getMessaging();
