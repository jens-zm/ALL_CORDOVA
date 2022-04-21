// Start konfigurasi
$('#memproses').css('visibility', 'visible');
const user = JSON.parse(localStorage.getItem('user'));
var jqxhr = $.ajax( "https://script.google.com/macros/s/AKfycbyLr5NiWHqwY-889xs7yFUElh_WQ1PlxTjN7V1i3eyU-vvGuc0/exec?config=cek&tahunajar="+tahunajaran+"&kelas="+user['KELAS'] )
  .done(function(data) {
    $('#memproses').css('visibility', 'hidden');
    var cek = JSON.parse(data);
    console.log(cek);
    if (cek['kelas'] == "Ada") {
    $('input[name=buat-kelas]').attr('checked', true);
    $('input[name=buat-absen]').removeAttr('disabled');
  }
  if (cek['absen'] == "Ada") {
    $('input[name=buat-absen]').attr('checked', true);
    $('input[name=buat-tugas]').removeAttr('disabled');
    $('input[name=buat-nilai]').removeAttr('disabled');
    $('input[name=buat-tabungan]').removeAttr('disabled');
    $('input[name=buat-infak]').removeAttr('disabled');
  }
  })
  .fail(function(err) {
    var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="cobaLagi()">Coba lagi</button>';
    M.toast({html: toastHTML, classes: 'rounded'});
  });

  //Kelas switch
$("#buat-kelas").on('change', function() {
  if ($(this).is(':checked')) {
      $('#modal-swich').modal('open');
      $('#judul-swich').html("Buat "+user['KELAS']+" ?").addClass('green-text');
      $('#konten-swich').html("Pengaturan ini akan membuat folder <b>"+user['KELAS']+"</b> pada database");
      $('#ok-prosess').attr('onclick', 'buatKelas()');
    }
  else {
    $('#modal-swich').modal('open');
    $('#judul-swich').html("Mohon Maaf..!").addClass('red-text');
    $('#konten-swich').html("Kelas yang sudah ada tidak dapat dihapus atau dinonaktifkan harap hubungi Administrator");
    $('#footer-swich').html('');
    setTimeout(function(){ reLoad();}, 4000);
  }
});
// Fungsi buat kelas
function buatKelas(){
  $('#memproses').css('visibility', 'visible');
  $('#modal-konfig').modal('open');
  $('#judul-konfig').html("<b>Membuat kelas..</b>");
  $.ajax( "https://script.google.com/macros/s/AKfycbyLr5NiWHqwY-889xs7yFUElh_WQ1PlxTjN7V1i3eyU-vvGuc0/exec?config=buat-kelas&tahunajar="+tahunajaran+"&kelas="+user['KELAS']+"&wali="+user['NAMA_LENGKAP']+"&id="+user['IDENTITAS'])
    .done(function(data) {
      var hasil = JSON.parse(data);
      $('#modal-konfig').modal('close');
      $('#memproses').css('visibility', 'hidden');
      $('#modal-status').modal('open');
      $('#judul-status').html(hasil['info']);
      $('#icon-status').html('check_circle').addClass('green-text');
      setTimeout(function(){ $('#modal-status').modal('close'); reLoad(); }, 3000);
    })
    .fail(function(err) {
      var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="buatKelas()">Coba lagi</button>';
      M.toast({html: toastHTML, classes: 'rounded'});
    });
}

//Kelas Absen
$("#buat-absen").on('change', function() {
if ($(this).is(':checked')) {
    $('#modal-swich').modal('open');
    $('#judul-swich').html("Buat Absen "+user['KELAS']+" ?").addClass('green-text');
    $('#konten-swich').html("Operasi ini memerlukan waktu 1-3 menit<br> Pastikan koneksi anda stabil, dan jangan meninggalkan halaman sampai operasi selesai");
    $('#ok-prosess').attr('onclick', 'buatAbsen()');
  }
else {
  $('#modal-swich').modal('open');
  $('#judul-swich').html("Mohon Maaf..!").addClass('red-text');
  $('#konten-swich').html("Absen yang sudah ada tidak dapat dihapus atau dinonaktifkan harap hubungi Administrator");
  $('#footer-swich').html('');
  setTimeout(function(){ reLoad();}, 4000);
}
});

// Fungsi buat absen
function buatAbsen(){
  $('#memproses').css('visibility', 'visible');
  $('#modal-konfig').modal('open');
  $('#judul-konfig').html("<b>Membuat absensi..</b>");
  $.ajax( "https://script.google.com/macros/s/AKfycbyLr5NiWHqwY-889xs7yFUElh_WQ1PlxTjN7V1i3eyU-vvGuc0/exec?config=buat-absen&tahunajar="+tahunajaran+"&kelas="+user['KELAS'] )
    .done(function(data) {
      var hasil = JSON.parse(data);
      $('#memproses').css('visibility', 'hidden');
      $('#modal-konfig').modal('close');
      $('#modal-status').modal('open');
      $('#judul-status').html(hasil['info']);
      $('#icon-status').html('check_circle').addClass('green-text');
      setTimeout(function(){ $('#modal-status').modal('close'); reLoad(); }, 3000);
    })
    .fail(function(err) {
      var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="buatAbsen()">Coba lagi</button>';
      M.toast({html: toastHTML, classes: 'rounded'});
    });
}


$("#batal").on('click', function() {
  reLoad();
});
