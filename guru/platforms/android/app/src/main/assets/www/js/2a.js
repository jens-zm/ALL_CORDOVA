const database = firebase.database();
    //Reff
    const dataMurid = database.ref('2a');
    var pilihNama = document.getElementById('pilih-nama');
    var pilihAbsen = document.getElementById('pilih-absen');


    dataMurid.on("child_added", function(data, prevChildKey) {
    var murid = data.val();

    var x = document.getElementById("daftarNama");
    var option = document.createElement("option");
    option.text = murid.nama;
  x.add(option);
  option.setAttribute('value', murid.no);
  option.setAttribute('id', 'ab'+murid.no);







    // var table = document.getElementById("tabel-murid").getElementsByTagName('tbody')[0];
    // var row = table.insertRow(table.rows.length);


  });

    function siapAbsen (){

    var no = document.getElementById('daftarNama').value;
  var nama = document.getElementById('ab'+no).textContent;
  pilihNama.style.display = 'none';
  pilihAbsen.style.display = 'block';
    var judul = document.getElementById('judul');
    judul.innerHTML = nama;


    };

    function kirimAbsen (){
    var x = document.forms["formTgl"]["fTgl"].value;
    var t = document.getElementById('absenHasil').value;
    if (x == "") {
    $('#errTanggal').modal('show');
    // alert("Tanggal Harus Diisi Dulu");

  } else if (t == "") {
    $('#errAbsen').modal('show');
  }
  else{
      var tanggal = document.getElementById('date').value;
      var hasil = document.getElementById('absenHasil').value; 
      var no = document.getElementById('daftarNama').value;
      var nama = document.getElementById('ab'+no).textContent;
      const dataAbsen = database.ref('absen2a/'+tanggal);
      //Untuk Modal
      const mod1 = document.getElementById('modalK1');
      const mod2 = document.getElementById('modalK2');

          dataAbsen.child(no).set({
          absen: hasil,
          });

          mod1.innerHTML = 'Absen <b>'+ nama+'</b>';
          mod2.innerHTML = 'tanggal ' +tanggal+' Terkirim'; 

            $.post("https://api.telegram.org/bot1395998360:AAFS6ITzkghGKKQneOHrzhuRIdXZUJ2XCV4/sendMessage?chat_id=1206954683&text="+tanggal+'✅ *'+nama+'* : '+hasil+"&parse_mode=Markdown");
          
        $('#suksesKirim').modal('show');



        }

    }
// tes Telegram







    function mauHapus (){
    var x = document.forms["formTgl"]["fTgl"].value;
    var t = document.getElementById('absenHasil').value;
    if (x == "") {
    $('#errTanggal').modal('show');
    // alert("Tanggal Harus Diisi Dulu");

  }
  else{
      var namaHapus = document.getElementById('namaHapus');
      var namaJudul = document.getElementById('judul').textContent;
      namaHapus.innerHTML= '"'+namaJudul+'" ?';
        
        $('#modalHapus').modal('show')

        }

    }






    function reload(){
      window.location.href='index.html';
    }

    function kembali(){
      window.history.back();
    }

function hapusAbsen() {
  var tanggal = document.getElementById('date').value;
  var hasil = document.getElementById('absenHasil').value; 
  var no = document.getElementById('daftarNama').value;
  var nama = document.getElementById('ab'+no).textContent;

  var hapusAbsen = database.ref('absen2a/'+tanggal+'/'+no);
hapusAbsen.remove();
$('#modalHapus').modal('hide');
   window.location.reload();
}