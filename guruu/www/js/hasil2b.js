const database = firebase.database();
  const absenDiv = document.getElementById('tampil-absen');
  $('#pilih-tgl-absen').css("display", "block");
  $(absenDiv).css("display", "none");

function tampilAbsen(){

  var x = document.forms["formTgl"]["fTgl"].value;
  if (x == "") {
    const warning = document.getElementById('date')
    $('#modalPeringatan').modal('show');
    // alert("Tanggal Harus Diisi Dulu");

  } else {

   $(document).ready(function (){
  const tanggalDiv = document.getElementById('pilih-tgl-absen');
  const absenDiv = document.getElementById('tampil-absen');
  const judul = document.getElementById('judul');
  const tgl = document.getElementById('date').value;
  $(tanggalDiv).css("display", "none");
  $(absenDiv).css("display", "block");
  judul.innerHTML = 'Absen Tgl: '+tgl;


    //Tampilkan data murid ke tabel
    const dataMurid = database.ref('2b');

    dataMurid.on("child_added", function(data, prevChildKey) {
    var murid = data.val();

    var table = document.getElementById("tabel-absen").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
  
    var cell1 = row.insertCell(0);
    cell1.setAttribute('id', murid.no);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell3.setAttribute('id', 'abs'+murid.no);

    cell1.innerHTML = murid.no;
    cell2.innerHTML = murid.nama;
    cell3.innerHTML = '--';


  });


}); //Tutup dokumen siap

  };


 $(document).ready(function (){
const dataMurid = database.ref('2b');
 	dataMurid.on("child_added", function(data, prevChildKey) {
    var murid = data.val();

    const no = document.getElementById(murid.no).textContent;

    const absenKosong = document.getElementById('abs'+no);
   const tgl = document.getElementById('date').value;
    const dataAbsen = database.ref('absen2b/'+tgl+'/'+no);
    dataAbsen.on("child_added", function(data, prevChildKey) {
    var abs = data.val();
    absenKosong.innerHTML= abs;

  });





  });
 })




} // Tutup Fungsi siap



    function kembali(){
    	window.history.back();
    }

