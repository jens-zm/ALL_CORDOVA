importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyCe1bqQDe7-EHhI0a2ZSU4I2kAohUTQqMw",
  authDomain: "absensi-148fe.firebaseapp.com",
  databaseURL: "https://absensi-148fe.firebaseio.com",
  projectId: "absensi-148fe",
  storageBucket: "absensi-148fe.appspot.com",
  messagingSenderId: "15733211376",
  appId: "1:15733211376:web:a9d51777dc3acc411b4235",
  measurementId: "G-F48K18XWQ9"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});