// Inisialisasi waktu js
let times = new Date();
let opsi = {year: 'numeric',month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
let lengkap = times.toLocaleDateString('id-ID', opsi);
let sem = lengkap.split(" ");

let nobulan = times.getMonth()+1;
let hariini=  times.toLocaleString('id-ID', {weekday: 'long'});
let tanggal=  parseInt(sem[0]);
let bulan= sem[1];
var nomorbulan = times.getMonth() +1;
let tahun= parseInt(sem[2]);
let jam= parseFloat(sem[3]);

// Semester
let semester ='';
let tahunajaran ='';
let thnUp = tahun +1;
let thnDwn = tahun -1;
if (nobulan > 6) {
  semester = 'Ganjil';
  tahunajaran = tahun+'-'+thnUp;
}else {
  semester = 'Genap';
  tahunajaran = thnDwn+'-'+tahun;
}
