importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAiSEC4IaT7LXLZqyS78JhsFTFP48QWoG0",
  authDomain: "pwa-app-1234.firebaseapp.com",
  projectId: "pwa-app-1234",
  storageBucket: "pwa-app-1234.appspot.com",
  messagingSenderId: "310078919824",
  appId: "1:310078919824:web:fa6e2500f2d76f0aefb415",
  measurementId: "G-QJLY6PHHKH",
});
const messaging = firebase.messaging();
