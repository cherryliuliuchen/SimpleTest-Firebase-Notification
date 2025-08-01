importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js');


firebase.initializeApp({
  apiKey: "12345678",
  authDomain: "octagram-12345678.firebaseapp.com",
  projectId: "octagram-12345678",
  storageBucket: "octagram-12345678.firebasestorage.app",
  messagingSenderId: "87654321",
  appId: "1:87654321:web:87654321",
  measurementId: "G-12345678"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js]  Background message ', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
