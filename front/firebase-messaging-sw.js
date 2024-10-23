import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);

self.addEventListener('push', function (event) {
    // メッセージを表示する
    var data = {};
    if (event.data) {
        data = event.data.json();
    }
    var title = data.notification.title;
    var message = data.notification.body;
    event.waitUntil(
        self.registration.showNotification(title, {
            'body': message
        })
    );
});
