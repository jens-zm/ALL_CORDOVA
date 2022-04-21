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



// FUNGSI Base64 Menjadi Blob
function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
  }

var blob = new Blob(byteArrays, {type: contentType});
return blob;
}


// SIMPAN
function savebase64AsPDF(folderpath,filename,content,contentType){
  // Convert the base64 string in a Blob
  var DataBlob = b64toBlob(content,contentType);
  
  alert("Starting to write the file :3");
  
  window.resolveLocalFileSystemURL(folderpath, function(dir) {
    alert("Access to the directory granted succesfully");
  dir.getFile(filename, {create:true}, function(file) {
    alert("File created succesfully.");
          file.createWriter(function(fileWriter) {
            alert("Writing content to file");
              fileWriter.write(DataBlob);
              
          }, function(){
            alert('Unable to save file in path '+ folderpath);
          });
  });
  });
}