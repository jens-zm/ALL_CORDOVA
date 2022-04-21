// Start konfigurasi
$('#memuat').show();
const user = JSON.parse(localStorage.getItem('user'));
var jqxhr = $.ajax( "https://script.google.com/macros/s/AKfycbzfFigXZrv-ddwXuQQy3H3s7LrLaTyqGcl23KJ_H0sjMh3gy0oP/exec?kelas=daftar&tahunajar="+tahunajaran )
  .done(function(data) {
    $('#memuat').hide();
    $('#daft-kel').show();
    var isi = JSON.parse(data);
    if (isi.length != 0) {
      for (var i = 0; i < isi.length; i++) {
        var ul = $('#daft-kel');
        var li = $("<li></li>").addClass("collection-item avatar");
        li.html('<i class="material-icons circle green">group</i><span class="title"><b>'+isi[i]['kelas']+'</b></span><p >'+isi[i]['wali']+'</p><div class="switch secondary-content"><label><input checked  value="'+isi[i]['kelas']+'" class="nama_kel" data-kelas="'+isi[i]['kelas']+'" type="checkbox"><span class="lever "></span></label></div>');
        ul.append(li);
      }
    }else {
      $('#keterangan').html('Tidak ada kelas aktif')
    }


  })
  .fail(function(err) {
    var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="reLoad()">Coba lagi</button>';
    M.toast({html: toastHTML, classes: 'rounded'});
  });



$("#batal").on('click', function() {
  reLoad();
});

$( document ).ready(function() {
  $(document).on("click", ".nama_kel", function(){
    kelaz = $(this).val();
    $('#modal-swich').modal('open');
    $('#judul-swich').html("Hapus "+kelaz+" ?").addClass('red-text');
    $('#konten-swich').html("Proses ini akan menghapus folder "+kelaz+" pada Google Drive <br> Pastikan untuk membackup data terlebih dahulu untuk mengindari kehilangan data penting");
    $('#ok-prosess').attr('onclick', 'hapusKelas()');

  });


});

function hapusKelas(){
  $('#memproses').css('visibility', 'visible');
  $('#modal-konfig').modal('open');
  $('#judul-konfig').html("<b>Menghapus "+kelaz+"</b>");
  $.ajax( "https://script.google.com/macros/s/AKfycbzfFigXZrv-ddwXuQQy3H3s7LrLaTyqGcl23KJ_H0sjMh3gy0oP/exec?kelas=hapus&tahunajar="+tahunajaran+"&data="+kelaz )
    .done(function(data) {
      $('#memproses').css('visibility', 'hidden');
      $('#modal-konfig').modal('close');
      var isi = JSON.parse(data);
      var info = isi['info'];
      $('#modal-status').modal('open');
      $('#judul-status').html(info);
      $('#icon-status').html('check_circle').addClass('green-text');
      setTimeout(function(){ $('#modal-status').modal('close'); reLoad(); }, 3000);

    })
    .fail(function(err) {
      var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="reLoad()">Coba lagi</button>';
      M.toast({html: toastHTML, classes: 'rounded'});
    });
}
