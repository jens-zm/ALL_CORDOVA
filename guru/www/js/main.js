	  var firebaseConfig = {
	    apiKey: "AIzaSyAMPsAcZwCEeccY9VTE8mvC82EJP6LTpUs",
	    authDomain: "kel2-69f68.firebaseapp.com",
	    databaseURL: "https://kel2-69f68.firebaseio.com",
	    projectId: "kel2-69f68",
	    storageBucket: "kel2-69f68.appspot.com",
	    messagingSenderId: "71307011253",
	    appId: "1:71307011253:web:1432075ff8aa907b50cafc"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const jam = database.ref('jam');

    jam.on("child_added", function(data, prevChildKey) {
    var wkt = data.val();
    const buka = wkt.buka;
    const tutup = wkt.tutup;
	var skrg = moment().format('H');
	var batas = tutup;
	var ditutup = document.getElementById('tutup');
	var dibuka = document.getElementById('buka');
    if (skrg >= batas) {
		ditutup.style.display = 'block';
		dibuka.style.display = 'none';
	}else if (skrg <= buka ) {
		ditutup.style.display = 'block';
		dibuka.style.display = 'none';
	}
	else{
		ditutup.style.display = 'none';
		dibuka.style.display = 'block';
	}





    // var table = document.getElementById("tabel-murid").getElementsByTagName('tbody')[0];
    // var row = table.insertRow(table.rows.length);


  });