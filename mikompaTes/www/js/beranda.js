var kelas = window.localStorage.getItem("kelas");
var semester = window.localStorage.getItem("semesterSkrg");
var thnAjar = window.localStorage.getItem("tAjarSkrg");
let nama = localStorage.getItem('nama');
let waktu = JSON.parse(window.localStorage.getItem('waktu'));
if (waktu.jam <= 10.00) {
  $("#selamat_datang").html('Selamat Pagi..');
}else if (waktu.jam <= 15.00) {
  $("#selamat_datang").html('Selamat Siang..');
}else if (waktu.jam <= 18.00) {
  $("#selamat_datang").html('Selamat Sore..');
}else if (waktu.jam <= 23.59) {
  $("#selamat_datang").html('Selamat Malam..');
}
// if (waktu.jam ==) {
//
// }
$("#selamat_datang").show();
$("#selamat_datang").animate({fontSize: '1.5em'}, 1500);
$("#nama").html(nama);
if (true) {

}
setTimeout(function(){
 $("#nama").fadeIn( 1000 ).show();
}, 1700);
setTimeout(function(){
 $("#selamat_datang").animate({fontSize: '0em', padding:'0em'}, 2000);
 $("#nama").animate({margin: '-20px'}, 2000);
 $("#menu_beranda").fadeIn( 'slow' );

 $("#loader_fix").fadeOut( 'slow' );
}, 3000);
setTimeout(function(){
$("#menu_lengkap").fadeIn( 'slow' );
}, 5000)
