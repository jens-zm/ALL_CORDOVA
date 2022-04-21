// CEK ADMIN
function cekAdmin(){
  var usr = localStorage.getItem('user');
  if (usr != null) {
    var usr_cek = JSON.parse(localStorage.getItem('user'));
      if (usr_cek['AKSES'] != 'Admin')  {
        window.location.href = "../index.html";
      }
  }else {
    window.location.href = "../index.html";
  }
}

// CEK GURU
function cekGuru(){
  var usr = localStorage.getItem('user');
  if (usr != null) {
    var usr_cek = JSON.parse(localStorage.getItem('user'));
      if (usr_cek['AKSES'] != 'Wali Kelas')  {
        window.location.href = "../index.html";
      }
  }else {
    window.location.href = "../index.html";
  }
}
// CEK MURID
function cekMurid(){
  var usr = localStorage.getItem('user');
  if (usr != null) {
    var usr_cek = JSON.parse(localStorage.getItem('user'));
      if (usr_cek['AKSES'] != 'Murid')  {
        window.location.href = "../index.html";
      }
  }else {
    window.location.href = "../index.html";
  }
}

// encrypt data
function encryptData(data,iv,key){
         if(typeof data=="string"){
            data=data.slice();
          encryptedString = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
      });
          }
         else{
         encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
      });
         }
      return encryptedString.toString();
}

// decrypt data
function decryptData(data,iv,key){
  var decrypted = CryptoJS.AES.decrypt(data, key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
      });
  return decrypted.toString(CryptoJS.enc.Utf8)
}

function cekAkses(){
  var usr = localStorage.getItem('user');
  if (usr != null) {
    var usr_act = JSON.parse(localStorage.getItem('user'));
      if (usr_act['AKSES'] == 'Admin')  {
        window.location.href = "admin/index.html";
      }else if (usr_act['AKSES'] == 'Wali Kelas') {
        window.location.href = "guru/index.html";
      }else if (usr_act['AKSES'] == 'Murid') {
        window.location.href = "murid/index.html";
      }
  }
}

function cekUser(){
  var usr = localStorage.getItem('user');
  if (usr != null) {
    cekAkses();
  }
}

function cekLogin(){
  var usr = localStorage.getItem('user');
  if (usr != null) {
    cekAkses();
  }else {
    window.location.href = "login.html";
  }
}

function logout(){
  window.location.href = "../login.html";
  localStorage.clear();

}

function goBack() {
  window.history.back();
}
function reLoad(){
  location.reload();
}


PullToRefresh.init({
mainElement: 'main',
onRefresh: function(){ window.location.reload(); }
});
