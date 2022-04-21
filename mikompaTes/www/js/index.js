let times = new Date();
let opsi = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
let lengkap = times.toLocaleDateString('id-ID', opsi);
console.log(lengkap);
let sem = lengkap.split(" ");
console.log(sem);
const wk = {
  hari: times.toLocaleString('id-ID', {weekday: 'long'}),
  tanggal: parseInt(sem[0]),
  bulan:sem[1],
  tahun:parseInt(sem[2]),
  jam:parseFloat(sem[3])
}
window.localStorage.setItem("waktu", JSON.stringify(wk));
waktu = JSON.parse(window.localStorage.getItem('waktu'));
//Logic Semester dan semester Aktif
var skrg = waktu.tahun;
var tPlus = waktu.tahun +1;
var tMin = waktu.tahun -1;
var ganjil = skrg+"-"+tPlus;
var genap = tMin+"-"+skrg;

if (waktu.bulan == "Januari" || waktu.bulan == "Februari" || waktu.bulan == "Maret" || waktu.bulan == "April" || waktu.bulan == "Mei" || waktu.bulan == "Juni") {
  window.localStorage.setItem("semesterSkrg", "Semester Genap");
  window.localStorage.setItem("tAjarSkrg", genap);
}else {
  window.localStorage.setItem("semesterSkrg", "Semester Ganjil");
  window.localStorage.setItem("tAjarSkrg", ganjil);
}


xCekKel = new XMLHttpRequest();
xCekKel.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  var data=JSON.parse(xCekKel.responseText);
  dbCK = data.hasil;
  $('#strt-btN').animate({opacity: "1"});
  var i = 0;
  while (i < dbCK.length) {
  let pilihan = $('<option value="'+dbCK[i].Kelas+'"></option>').text(dbCK[i].Kelas);
  $('#data-kel').append(pilihan);
  i++
}

}
}
xCekKel.open("GET", "https://script.google.com/macros/s/AKfycbzxyyRImj_rOnDMnnL3yEH--Rsyvxs0CqDwPeGNTAvP3wwmj98/exec?aksi=read", true);
xCekKel.send();

function mulaiApp(){
  $(document.body).removeClass('blue-grey darken-1');
  $('#navigasi').animate({opacity: "1"}).fadeIn(3000);
  $('#wilujeng').animate({opacity: "0"});
  setTimeout(function(){
    $('#wilujeng').hide();
    $('#pilih-kelas').show();

  }, 500);
  setTimeout(function(){
    $('#pilih-kelas').animate({paddingTop: "+=30px"});

  }, 600);


}

let url = "https://script.google.com/macros/s/AKfycbwdsvN12guV_Z6gINnICpzJk3R4FBTs7N1te8dNP_NzZtkV7T-v/exec"

xBuatKel = new XMLHttpRequest();
xBuatKel.onreadystatechange = function(e) {
  console.log(xBuatKel.status);
  if (this.readyState == 4 && this.status == 200) {
    var data=JSON.parse(this.responseText);
    console.log(data);
    $('#stat-pross').html('<b>Sukses...</b>');
    $('#stat-suks').html(data.info);
    $('#anima-pross').hide();
    $('#anima-sukses').show();
    $('#tmbl-buat').hide();
    $('#nextz').show();
    $('#tmbl-coba').hide();
    $('#tmbl-ta').hide();
    $('#beraksi').hide();
  }
  if (this.status >= 300) {
    $('#pross-buat').hide();
    $('#pross-err').show();
    $('#tmbl-coba').show();
    $('#tmbl-buat').hide();
    $('#tmbl-coba').toggleClass('disabled');
  }
};
  xBuatKel.onerror = function(e){
    $('#pross-buat').hide();
    $('#pross-err').show();
    $('#tmbl-coba').show();
    $('#tmbl-buat').hide();
    $('#tmbl-coba').toggleClass('disabled');
  }

function buatKel(){
  if ($('#data-kel').val() == null) {
    M.toast({html: 'Pilih kelas dulu...'});
  }
  else {
    $('#silahkan-pil').hide();
    $('#pil-kels').hide();
    $('#pross-buat').show();
    $('#tmbl-buat').addClass('disabled');
    $('#pross-err').hide();
    $('#tmbl-coba').toggleClass('disabled');
    var inpKel = $('#data-kel').find(":selected").text();
    window.localStorage.setItem("kelas", inpKel);
    xBuatKel.open("GET", url+"?buat=kelas&namaKelas="+inpKel, true);
    xBuatKel.send();
  }

}

//Membuat Tahun Ajaran
function selanj(){
  let sblm = waktu.tahun -1;
  let stlh = waktu.tahun +1;
  while (sblm <= stlh) {
    let satu = sblm;
    let dua = sblm+1
    let tA = satu+"-"+dua;
    let pilTA = $('<option value="'+tA+'"></option>').text(tA);
    $('#data-ta').append(pilTA);
    $('#pembuatan').html('<b>Pembuatan Tahun Ajaran</b>');
    $('#pembuatan').html('<b>Pembuatan Tahun Ajaran</b>');
    $('#stat-pross').hide();
    $('#anima-sukses').hide();
    $('#silahkan-pil').html('Silahkan pilih tahun Ajaran');
    $('#silahkan-pil').fadeIn(1000).show();
    $('#nextz').hide();
    $('#tmbl-ta').fadeIn(3000).show();
    $('#pil-ta').show();
    $('#pil-kels').hide();
    sblm++

  }
}
function buatTa(){
  var inpTa = $('#data-ta').find(":selected").text();
  var kelas = window.localStorage.getItem("kelas");
  if ($('#data-ta').val() == null) {
    M.toast({html: 'Pilih tahun ajaran dulu...'});
  }else {
    $('#pil-ta').hide();
    $('#tmbl-ta').toggleClass('disabled');
    $('#anima-pross').show();
    $('#stat-pross').html('<b>Memproses permintaan..</b>').show();
    $('#silahkan-pil').hide();
    $('#beraksi').show();
    setTimeout(function(){ $('#ganjil').show(); }, 3000);
    setTimeout(function(){ $('#genap').show(); }, 8000);
    setTimeout(function(){ $('#copGan').show(); }, 16000);
    setTimeout(function(){ $('#copGen').show(); }, 24000);

    $('#pilih-kelas').animate({paddingTop: "-=30px"});
    $('#nextz').attr("onclick","copying()");



    xBuatKel.open("GET", url+"?buat=tahun-ajaran&namaKelas="+kelas+"&ta="+inpTa, true);
    xBuatKel.send();

  }
}

function copying(){
  window.location.href="profil.html"
}
