const database = firebase.database();
  const absenDiv = document.getElementById('tampil-absen');
  $('#pilih-tgl-absen').css("display", "block");
  $(absenDiv).css("display", "none");
  $('#edit-absen').css("display", "none");

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
  const editAbsen = document.getElementById('edit-absen');
  const judul = document.getElementById('judul');
  const tgl = document.getElementById('date').value;
  $(tanggalDiv).css("display", "none");
  $(absenDiv).css("display", "block");
  $('#edit-absen').css("display", "none");
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
    cell3.setAttribute('class', 'absensi');

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





// var jum = 38;
// var kos= []
// for (var i = 1; i < jum; i++) {
//   if (i<=jum){
//     const absenKosong1 = document.getElementById('abs'+no).textContent;
//     kos.push(absenKosong1);
//   }

// }

// console.log(kos);


  });


  });


 })




} // Tutup Fungsi siap




function editAbsen(){
  $('#edit-absen').css("display", "block");
  $(absenDiv).css("display", "none");
  $(document).ready(function (){
  const tanggalDiv = document.getElementById('pilih-tgl-absen');
  const absenDiv = document.getElementById('tampil-absen');
  const editAbsen = document.getElementById('edit-absen');
  const judul = document.getElementById('judul');
  const tgl = document.getElementById('date').value;
  judul.innerHTML = 'Absen Tgl: '+tgl;


    //Tampilkan data murid ke tabel
    const dataMurid = database.ref('2b');

    dataMurid.on("child_added", function(data, prevChildKey) {
    var murid = data.val();

    var table = document.getElementById("tabel-edit").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
  
    var cell1 = row.insertCell(0);
    cell1.setAttribute('id', murid.no);
    var cell2 = row.insertCell(1);
    cell2.setAttribute('id', 'murid'+murid.no);
    var cell3 = row.insertCell(2);
    cell3.setAttribute('id', 'abs'+murid.no);

    cell1.innerHTML = murid.no;
    cell2.innerHTML = murid.nama;
    cell3.innerHTML = '<form class="was-validated"><div class="form-group"><select class="custom-select" id="absensi'+murid.no+'" required><option value="">Pilih..</option><option value="Hadir">Hadir</option><option value="Sakit">Sakit</option><option value="Ijin">Izin</option><option value="Alpa">Alpa</option></select></div></form>';


  });


});

 $(document).ready(function (){
const dataMurid = database.ref('2b');
  dataMurid.on("child_added", function(data, prevChildKey) {
    var murid = data.val();

    const no = document.getElementById(murid.no).textContent;

    const absenPilih = document.getElementById('absensi'+no);
   const tgl = document.getElementById('date').value;
    const dataAbsen = database.ref('absen2b/'+tgl+'/'+no);
    dataAbsen.on("child_added", function(data, prevChildKey) {
    var abs = data.val();
    absenPilih.value = abs;



  });



  });
 })


} //Tutup Edit Absen

function simpanAbsen(){
   $(document).ready(function (){

    const dataMurid = database.ref('2b');
  dataMurid.on("child_added", function(data, prevChildKey) {
    var murid = data.val();
      var tanggal = document.getElementById('date').value;
      var no = document.getElementById(murid.no).textContent; 
      var absenSelect = document.getElementById('absensi'+murid.no).value;
      var nama = document.getElementById('murid'+murid.no).textContent;
      const dataAbsen = database.ref('absen2b/'+tanggal);

          dataAbsen.child(no).update({
          absen: absenSelect,
          });
          $('#suksesUpdate').modal('show');
          
})
})
}






    function kembali(){
    	window.history.back();
    }

function reload(){
  location.reload();
}



// TESSSSS