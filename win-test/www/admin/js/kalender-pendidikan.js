// Start konfigurasi
$('#memproses').css('visibility', 'visible');
var thajar = $('#thn_ajar').html("Tahun Ajaran "+tahunajaran);
const user = JSON.parse(localStorage.getItem('user'));
$.ajax("https://script.google.com/macros/s/AKfycbxKhN0yWCVt7wIT-dH0d6e7n85I-erqVvL7-hdiMY9sLc_2bShh/exec?kalender=baca&tahunajar="+tahunajaran)
  .done(function(data) {
    var kal = JSON.parse(data);
    var tbody = $("#body-kalender");
    $("#memuat").hide();
    $("#tabel-kalender").show();
    $("#tmbl-tambah").show();
    for (var i = 0; i < kal.length; i++) {
      var tr = $("<tr></tr>").addClass("hoverable aslink");
      tr.attr("data-tanggal", kal[i]["TANGGAL"]);
      tr.attr("data-ket", kal[i]["KETERANGAN"]);
      var td1 = $("<td></td>");
      td1.html("<b>"+kal[i]["TANGGAL"]+"</b>");
      var td2 = $("<td></td>");
      td2.html(kal[i]["KETERANGAN"]);
      tr.append(td1,td2);
      tbody.append(tr);
    }
  })
  .fail(function(err) {

  });

  $(document).on("click", ".aslink", function(){
    $("#modal-data").modal("open");
    var tgl = $(this).data("tanggal");
    var ket = $(this).data("ket");
    $("#judul-data").html(tgl);
    $("#konten-data").html(ket);
    $("#editkal").click(function(){
      $("#modal-edit").modal("open");
      $("#tgl").val(tgl);
      $("#tgl-baru").val(tgl);
      $('#utk-tgl-baru').datepicker("setDate", new Date(tgl) );
      $("#ket-edit").val(ket);
      $("#updatekal").click(function(){
        var tglbaru = $("#tgl-baru").val();
        var dataket = $("#ket-edit").val();
        $("#modal-proses").modal("open");
        $("#judul-proses").html("Memperbaharui Kalender");
        $.ajax("https://script.google.com/macros/s/AKfycbxKhN0yWCVt7wIT-dH0d6e7n85I-erqVvL7-hdiMY9sLc_2bShh/exec?kalender=update&tahunajar="+tahunajaran+"&tanggal="+tgl+"&tanggal_baru="+tglbaru+"&keterangan="+dataket)
          .done(function(data) {
            var updt = JSON.parse(data);
            $("#modal-proses").modal("close");
            $("#modal-status").modal("open");
            $("#judul-status").html(updt["hasil"]);
            $("#icon-status").html('check_circle').addClass('green-text');
            setTimeout(function(){ reLoad(); }, 3000);
          })
          .fail(function(err) {
            console.log(err);
          });
      })

    });
    $("#deletekal").click(function(){
      $("#modal-hapus").modal("open");
      $("#judul-hapus").html(tgl);
      $("#konten-hapus").html(ket);
      $("#hapkal").click(function(){
        $("#modal-proses").modal("open");
        $("#judul-proses").html("Menghapus "+tgl);

      $.ajax("https://script.google.com/macros/s/AKfycbxKhN0yWCVt7wIT-dH0d6e7n85I-erqVvL7-hdiMY9sLc_2bShh/exec?kalender=delete&tahunajar="+tahunajaran+"&tanggal="+tgl)
        .done(function(data) {
          var del = JSON.parse(data);
          $("#modal-proses").modal("close");
          $("#modal-status").modal("open");
          $("#judul-status").html(del["hasil"]);
          $("#icon-status").html('check_circle').addClass('green-text');
          setTimeout(function(){ reLoad(); }, 3000);
        })
        .fail(function(err) {
          console.log(err);
        });
    });
    });
  });
  $("#tgl-baru").click(function(){
    $("#utk-tgl-baru").datepicker("open");
  });
  $("#utk-tgl-baru").change(function(){
    $("#tgl-baru").val($("#utk-tgl-baru").val());
  });

  $("#tambah-tgl").click(function(){
    $("#utk-tgl-baru").datepicker("open");
  });
  $("#utk-tgl-baru").change(function(){
    $("#tambah-tgl").val($("#utk-tgl-baru").val());
  });

  $("#tambahkan").click(function(){
    $("#modal-tambah").modal("open");
    $("#tambahkal").click(function(){
      $("#modal-proses").modal("open");
      $("#judul-proses").html("Menambah Tanggal");
      var tTambah = $("#tambah-tgl").val();
      var kTambah = $("#tambah-ket").val();
      $.ajax("https://script.google.com/macros/s/AKfycbxKhN0yWCVt7wIT-dH0d6e7n85I-erqVvL7-hdiMY9sLc_2bShh/exec?kalender=add&tahunajar="+tahunajaran+"&tanggal="+tTambah+"&keterangan="+kTambah)
        .done(function(data) {
          var tam = JSON.parse(data);
          $("#modal-proses").modal("close");
          $("#modal-status").modal("open");
          $("#judul-status").html(tam["hasil"]);
          $("#icon-status").html('check_circle').addClass('green-text');
          setTimeout(function(){ reLoad(); }, 3000);
        })
        .fail(function(err) {
          console.log(err);
        });
    });
  });

// function editKal(tgl,ket){
//   console.log(tgl+" "+ket);
// }
  $("#batal").click(function(){
    $("#modal-proses").modal("open");
  });
