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
  title: 'MIKompa App',
  buttonOk: 'Tutup',
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


// Laman Login
$$(document).on('page:init', '.page[data-name="login"]', function (e) {
  // import('../script/login.js');
    // data terpilih
    var username ="";
    var password ="";
    // data Nama
    $('#username').on('input', function() {
      username = $("#username").val();
      cekIsian();
    });
  
      // data No HP
    $('#password').on('input', function() {
      password = $("#password").val();
      cekIsian();
    });
    
  function cekIsian(){
    if (username != "" && password != "") {
      $("#aktifkan-app").removeClass("disabled");
    }else{
      $("#aktifkan-app").addClass("disabled");
    }
  }

  
  $("#aktifkan-app").click(function(){
    app.progressbar.show('multi');
    app.dialog.preloader('Sedang login');
    var url = localStorage.getItem("url");
    app.request.get(url+"?action=getUsers&ta=2021-2022", function (dataUser) {
      console.log(JSON.parse(dataUser));
      var usr = JSON.parse(dataUser)
      var gets = usr["users"];
      var data = gets;
      // console.log(data);
      var iv  = CryptoJS.enc.Base64.parse("");
      var key=CryptoJS.SHA256(localStorage.getItem('kode'));
      var users = JSON.parse(decryptData(data,iv,key));
      console.log(users);
      console.log(password);
      for (var i = 0; i < users.length; i++) {
        if (users[i]['USERNAME'] == username) {
          app.dialog.close();
          app.progressbar.hide();
          if (users[i]['PASSWORD'] == password) {
            var user = JSON.stringify(users[i]);
            localStorage.setItem('user', user);
            cekAkses();
          }else{
            navigator.notification.beep(1);
            app.dialog.alert('Kata sandi salah');
          }
        }
      }
    });
    // console.log(username);
    // console.log(password);
  });
});

// $$(document).on('page:init', '.page[data-name="login"]', function (e, page) {
//   import('../script/something.js').then((u)=>{
//   });
// });
