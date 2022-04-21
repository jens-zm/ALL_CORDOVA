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
         app.dialog.alert('Akses Admin');
       }else if (usr_act['AKSES'] == 'Wali Kelas') {
         app.dialog.alert('Akses Guru');
       }else if (usr_act['AKSES'] == 'Murid') {
         app.dialog.alert('Akses Murid');
       }
   }
 }