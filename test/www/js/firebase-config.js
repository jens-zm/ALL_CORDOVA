//Konfigurasi
var firebaseConfig = {
    apiKey: "AIzaSyCe1bqQDe7-EHhI0a2ZSU4I2kAohUTQqMw",
    authDomain: "absensi-148fe.firebaseapp.com",
    databaseURL: "https://absensi-148fe.firebaseio.com",
    projectId: "absensi-148fe",
    storageBucket: "absensi-148fe.appspot.com",
    messagingSenderId: "15733211376",
    appId: "1:15733211376:web:21a17a0004c6520a1b4235",
    measurementId: "G-06J2H3KSFD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//Mulai
var db = firebase.database();
var muridRef = db.ref().child('murid');

muridRef.on('value', snap => console.log(snap.val()) );
