const database = firebase.database();
var tampilBuka = document.getElementById('bk1');
var tampilTutup = document.getElementById('ttp1');

// Untuk Modal Kawin
var isiBuka = document.getElementById('isiBuka');
var isiTutup = document.getElementById('isiTutup');

var jam = database.ref('jam')
    jam.on("child_added", function(data, prevChildKey) {
	var dataJam = data.val();

	tampilBuka.innerHTML = '<b>: '+dataJam.buka+'</b>';
	tampilTutup.innerHTML = '<b>: '+dataJam.tutup+'</b>';


	isiBuka.value= dataJam.buka;
	isiTutup.value= dataJam.tutup;
	 
	});


function ubahJam(){

			  jam.child('1').set({
			    buka: Number (isiBuka.value),
			    tutup: Number (isiTutup.value),
			  });
			  $('#modalEdit').modal('hide');
			  window.location.reload();

}



    function kembali(){
    	window.history.back();
    }

