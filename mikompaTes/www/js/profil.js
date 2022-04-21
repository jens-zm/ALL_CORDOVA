url = 'https://script.google.com/macros/s/AKfycbwsqGJIRFcqK3-Bu7cCOfyYqh2MN8T2ZuItu0r4r8kZam8dBiGP/exec';
cekProf = new XMLHttpRequest();
cekProf.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data=JSON.parse(cekProf.responseText);
    dtGru = data.hasil[0];
    console.log(dtGru);
    if(dtGru.Status == "Tidak Aktif"){
      $('#loader').hide();
      $('#batal_edt').hide();
      $('#tampil-profil').hide();
      $('#edit-profil').show();
    }else {
      $('#footer-next').show();
      $('#data-nama').html(dtGru.Nama);
      $('#nama_lengkap').val(dtGru.Nama);
      $('#data-kel').html(dtGru.Jenis_Kelamin);
      $('#data-email').html(dtGru.Email);
      $('#email').val(dtGru.Email);
      $('#data-nuptk').html(dtGru.NIP_NUPTK);
      $('#nip-nuptk').val(dtGru.NIP_NUPTK);
      $('#data-jabatan').html(dtGru.Jabatan);
      $('#jabatan').val(dtGru.Jabatan);
      $('#data-alamat').html(dtGru.Alamat);
      $('#alamat').val(dtGru.Alamat);
      $('#data-wa').html(dtGru.No_Whatsapp);
      $('#no-wahtsapp').val(dtGru.No_Whatsapp);
      $('#data-status').html(dtGru.Status);

      $('#tampil-profil').show();
      $('#loader').hide();
      $('#edit-profil').hide();
    }
    if (dtGru.Profil_URL == "") {

    }else {
      $('#avatar').attr('src', dtGru.Profil_URL);
    }

}
}
var kelas = window.localStorage.getItem("kelas");
var semester = window.localStorage.getItem("semesterSkrg");
var thnAjar = window.localStorage.getItem("tAjarSkrg");
cekProf.open("GET", url+"?action=read&kelas="+kelas+"&ta="+thnAjar+"&semester="+semester+"&sheet=Data Guru", true);
cekProf.send();



updtProf = new XMLHttpRequest();
updtProf.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    $('#isi-proses').html('Sukses..');
    $('#sukses-proses').show();
    $('#sedang-proses').hide();
    setTimeout(function(){
     $('#modal-proses').modal("close");
     location.reload();
   }, 1700);
  }}
function simpanProfil(){
  // let form = document.querySelectorAll(".validate");
  // var bnyk = form.length;
  // for (var i = 0; i < bnyk.length; i++) {
  //   console.log(bnyk[i].value);
  // }
  // if (true) {
  //
  // }
  let namaLengkap = $("#nama_lengkap").val();
  let email = $("#email").val();
  let jenisKelamin = $("#jenis-kelamin :selected").text();
  let nipNuptk = $("#nip-nuptk").val();
  let jabatan = $("#jabatan").val();
  let alamat = $("#alamat").val();
  let noWahtsapp = $("#no-wahtsapp").val();
  updtProf.open("GET", url+"?action=update&kelas="+kelas+"&ta="+thnAjar+"&semester="+semester+"&sheet=Data Guru&nama="+namaLengkap+"&email="+email+"&jKel="+jenisKelamin+"&nuptk="+nipNuptk+"&jabatan="+jabatan+"&alamat="+alamat+"&noWa="+noWahtsapp+"&status=Aktif", true);
  window.localStorage.setItem("nama", namaLengkap);
  updtProf.send();
  $('#modal-proses').modal("open");
  // location.reload();
}

function editProfil(){
$('#tampil-profil').hide();
$('#edit-profil').show();
}

https://script.google.com/macros/s/AKfycbys89_qdGWDhcImHOnXzIixNyqXsc6q-PunogOjZ-z9jx-dZnA/exec?nama=Jejen ZM&kelas=Kelas 1A&ta=2020-2021&semester=Semester Genap
function editFoto(){
var nama = window.localStorage.getItem("nama");
var uplFrame = '<iframe width="200" height="280" src="https://script.google.com/macros/s/AKfycbys89_qdGWDhcImHOnXzIixNyqXsc6q-PunogOjZ-z9jx-dZnA/exec?nama='+nama+'&kelas='+kelas+'&ta='+thnAjar+'&semester='+semester+'" frameborder="0" allowfullscreen></iframe>'
$('#upload-foto').append(uplFrame);
$('#edit-foto').show();
$('#tampil-profil').hide();

}

function selesaiUpl(){
location.reload();
}
console.log(window.localStorage.getItem('semesterSkrg'));
console.log(window.localStorage.getItem('kelas'));
