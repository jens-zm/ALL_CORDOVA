// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'com.asvie2.app',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  navbar: {
  mdCenterTitle: true,
  },
  dialog: {
  title: 'Asvie App',
  buttonOk: 'Done',
}
});

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
  checking();
}
function checking(){
  var status = localStorage.getItem("status");
  if (status == "aktif") {
    setTimeout(function(){
      app.views.main.router.navigate('/beranda/')
    }, 3500);
  }
  else {
    setTimeout(function(){
      app.views.main.router.navigate('/login/')
    }, 3500);
  }
}


// Laman Login fetch data provinsi
$$(document).on('page:init', '.page[data-name="login"]', function (e) {
  // data terpilih
  var nama ="";
  var noHp ="";
  var provName ="";
  var kabName ="";
  var kecName ="";
  var desName ="";
  var kamp="";
  // data Nama
  $('#nama').on('input', function() {
    nama = $("#nama").val();
    cekIsian();
  });

    // data No HP
  $('#no-hp').on('input', function() {
    noHp = $("#no-hp").val();
    cekIsian();
  });
  

  // data Provinsi
  fetch(`https://jens-zm.github.io/wilayah-id/api/provinces.json`)
  .then(response => response.json())
  .then(provinces => {
    var provinsi = provinces;
    var listProvinsi = $$("#pilih-provinsi");
    for (var i = 0; i < provinsi.length; i++) {
      var provList = '<option value="'+provinsi[i]['id']+'" >'+provinsi[i]['name']+'</option>';
      $$("#pilih-provinsi").append(provList);
    }
  });

// Opsi Kabupaten
  $( "#pilih-provinsi" ).change(function() {
    var prov = $('#pilih-provinsi');
    provName = $("#pilih-provinsi option:selected").text();
    var provId = prov.val();
    fetch(`https://jens-zm.github.io/wilayah-id/api/regencies/`+provId+`.json`)
    .then(response => response.json())
    .then(regencies => {
      var listKab = $("#pilih-kabupaten");
      for (var k = 0; k < regencies.length; k++) {
        var kabOpt = '<option value="'+regencies[k]['id']+'" >'+regencies[k]['name']+'</option>';
        listKab.append(kabOpt);
      }
    });
    $("#kabupaten").show();
    cekIsian();
});

// Opsi Kecamatan
  $( "#pilih-kabupaten" ).change(function() {
    var kab = $('#pilih-kabupaten');
    kabName = $("#pilih-kabupaten option:selected").text();
    var kabId = kab.val();
    fetch(`https://jens-zm.github.io/wilayah-id/api/districts/`+kabId+`.json`)
    .then(response => response.json())
    .then(districts => {
      var listKec = $("#pilih-kecamatan");
      for (var x = 0; x < districts.length; x++) {
        var kecOpt = '<option value="'+districts[x]['id']+'" >'+districts[x]['name']+'</option>';
        listKec.append(kecOpt);
      }
    });
    $("#kecamatan").show();
    cekIsian();
});

// Opsi Desa kel
  $( "#pilih-kecamatan" ).change(function() {
    var kec = $('#pilih-kecamatan');
    kecName = $("#pilih-kecamatan option:selected").text();
    var kecId = kec.val();
    fetch(`https://jens-zm.github.io/wilayah-id/api/villages/`+kecId+`.json`)
    .then(response => response.json())
    .then(villages => {
      var listDes = $("#pilih-desa");
      for (var y = 0; y < villages.length; y++) {
        var desOpt = '<option value="'+villages[y]['id']+'" >'+villages[y]['name']+'</option>';
        listDes.append(desOpt);
      }
    });
    $("#desa").show();
    cekIsian();
});

// Opsi Kampung
  $( "#pilih-desa" ).change(function() {
    var des = $('#pilih-desa');
    desName = $("#pilih-desa option:selected").text();
    var desId = des.val();
    $("#kampung").show();
    cekIsian();
});

// data Kampung
$('#data-kampung').on('input', function() {
  kamp = $("#data-kampung").val();
  cekIsian();
});

function cekIsian(){
  if (nama != "" && noHp != "" && provName != "" && kabName != "" && kecName != "" & desName != "" & kamp != "" ) {
    $("#aktifkan-app").removeClass("disabled");
  }
}

$("#aktifkan-app").click(function(){
  var data_user = {
    nama: nama,
    no_hp: noHp,
    alamat: kamp+" Des/Kel "+desName+" Kec. "+kecName+" "+kabName+" Provinsi "+ provName,
  };
  localStorage.setItem("data_user",JSON.stringify(data_user));
  localStorage.setItem("status","aktif");
  location.reload();
  // var lokalUser = localStorage.getItem("data_user");
  // console.log(JSON.parse(lokalUser));

  // app.dialog.alert("Nama : "+nama+" No HP : "+noHp+" Alamat : "+kamp+" Des/Kel "+desName+" Kec. "+kecName+" "+kabName+" Provinsi "+ provName);
})

})
