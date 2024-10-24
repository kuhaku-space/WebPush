import { firebaseConfig } from "./modules/config";
import { getIDToken } from "./modules/token";

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 通知を許可するボタンが押された時のアクション
const btn = document.getElementById('allow_push_notification');
btn.addEventListener("click", function () {
    if (!("Notification" in window)) { // ブラウザーが通知に対応しているか調べる
        alert("このブラウザーはデスクトップ通知には対応していません。");
    } else if ("serviceWorker" in navigator) {
        getIDToken(messaging);
    }
});
