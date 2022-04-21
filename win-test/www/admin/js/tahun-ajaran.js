// Start konfigurasi
$('#memuat').show();
const user = JSON.parse(localStorage.getItem('user'));
let taAda = "";
var jqxhr = $.ajax( "https://script.google.com/macros/s/AKfycbwi22oRI80qbjUG2ig_upAdLEmm7cRWln5mxTZygUcqFBRRrX7C/exec?action=readTA" )
  .done(function(data) {
    $("#memuat").hide();
    $("#buat-ta").removeClass("disabled");
    $("#list-ta").show();
    let ta = JSON.parse(data);
    taAda = ta;
    console.log(ta);
    ta.sort();
    console.log(ta);
    let ulTA = $("#daftar-ta");
    for (var i = 0; i < ta.length; i++) {
      if (ta[i] == tahunajaran) {
        let li = $("<li></li>");
        let divLi = $("<div></div>").addClass("collapsible-header jarak-coll green white-text");
        divLi.html('<i class="material-icons">access_time</i>T.A. '+ta[i]+'<span class="new badge red" data-badge-caption="Aktif"></span>');

        let divColl = $("<div></div>").addClass("collapsible-body center-align");
        divColl.html("<p>Tahun ajaran sedang aktif</p><a class='waves-effect waves-light btn orange unduh-data' data-ta="+ta[i]+"><i class='material-icons left'>download</i>Download Data</a>");
        li.append(divLi,divColl);
        ulTA.append(li);
      }else {
        let li = $("<li></li>");
        let divLi = $("<div></div>").addClass("collapsible-header jarak-coll grey white-text");
        divLi.html('<i class="material-icons">access_time</i>T.A. '+ta[i]);

        let divColl = $("<div></div>").addClass("collapsible-body center-align");
        divColl.html("<p>Tahun ajaran tidak aktif</p><a class='unduh-data waves-effect waves-light btn' data-ta="+ta[i]+"><i class='material-icons left'>download</i>Download Data</a>");
        li.append(divLi,divColl);
        ulTA.append(li);
      }
    }
  })
  .fail(function(err) {
    var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="reLoad()">Coba lagi</button>';
    M.toast({html: toastHTML, classes: 'rounded'});
  });

  // BUAT TAHUN AJARAN
  let thnMin = tahun -2;
  let thnMax = tahun +5;
  let pilih = $("#ta-baru");
  for (var i = thnMin; i < thnMax; i++) {
    let kurang = i -1;
    let thnajr = kurang+"-"+i;
    let taBaru = $("<option>"+thnajr+"</option>").attr("value", thnajr);
    pilih.append(taBaru);
  }

$("#buat-ta").click(function(){
  $("#modal-tambah-ta").modal("open");
  let taCopy = $("#ta-copy");
  for (var x = 0; x < taAda.length; x++) {
    let taLama = $("<option>"+taAda[x]+"</option>").attr("value", taAda[x]);
    taCopy.append(taLama);
  }
})
function buatTa(){
  let baru = $('select[name=ta-baru] option').filter(':selected').val();
  let lama = $('select[name=ta-copy] option').filter(':selected').val();
  $("#modal-proses").modal("open");
  $("#judul-proses").html("Membuat Tahun ajaran baru "+baru);
  $.ajax( "https://script.google.com/macros/s/AKfycbwi22oRI80qbjUG2ig_upAdLEmm7cRWln5mxTZygUcqFBRRrX7C/exec?action=addTA&taBaru="+baru+"&taCopy="+lama )
    .done(function(data) {
      let ress = JSON.parse(data);
      let info = ress["info"];
      $("#modal-proses").modal("close");
      $("#modal-status").modal("open");
      if (info == "Tahun Ajaran Sudah Ada") {
        $("#judul-status").html(info);
        $("#icon-status").html("close").addClass("red-text");
        setTimeout(function(){
        location.reload();
        }, 3000);
      }
      else {
        $("#judul-status").html(info);
        $("#icon-status").html("check_circle").addClass("green-text");
        setTimeout(function(){
        location.reload();
        }, 3000);
      }


    })
    .fail(function(err) {
      var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="reLoad()">Coba lagi</button>';
      M.toast({html: toastHTML, classes: 'rounded'});
    });
}

// DOWNLOAD DATA

$( document ).ready(function() {
  $(document).on("click", ".unduh-data", function(){
    let isiTA = $(this).data("ta");
    $("#modal-download").modal("open");
    $("#memuat-link").show();
    $.ajax( "https://script.google.com/macros/s/AKfycbwi22oRI80qbjUG2ig_upAdLEmm7cRWln5mxTZygUcqFBRRrX7C/exec?action=openFolderTA&ta="+ isiTA )
      .done(function(data) {
        $("#memuat-link").hide();
        let ress = JSON.parse(data);
        $("#buka-download").show();
        let info = ress["info"];
        $("#status-download").addClass("green-text");
        $("#status-download").html("Link sudah siap");
        $("#tmbl-dwnld").removeClass("disabled");
        $("#tmbl-dwnld").click(function(){
          openAppBro(info);
        });


      })
      .fail(function(err) {
        var toastHTML = '<span>Terjadi kesalahan..</span><button class="btn-flat toast-action" onclick="reLoad()">Coba lagi</button>';
        M.toast({html: toastHTML, classes: 'rounded'});
      });

  });


});

function openAppBro(info){
  document.addEventListener('deviceready', onDeviceReady, false);
  function onDeviceReady() {
    cordova.InAppBrowser.open(info, '_system', 'location=no');
    };
}
