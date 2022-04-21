// var kunciLoc = localStorage.getItem("kunci");
// var jawabLoc = localStorage.getItem("jawab");
var isiNama = userLoc;
var divTerkunci = document.getElementById('divTerkunci');
var divMintaKunci = document.getElementById('divMintaKunci');
var divKodeDibuat = document.getElementById('divKodeDibuat');
var divMasukkanKunci = document.getElementById('divMasukkanKunci');
console.log(isiNama);


if (kunciLoc == null ) 
{
	divTerkunci.style.display = 'block';
	divMintaKunci.style.display = 'none';
	divMasukkanKunci.style.display = 'none';
	divKodeDibuat.style.display = 'none';
} 
else if (isiNama == null) 
{
	divTerkunci.style.display = 'none';
	divMintaKunci.style.display = 'block';
	divKodeDibuat.style.display = 'none';
	divMasukkanKunci.style.display = 'none';
}
else if (jawabLoc == null) 
{
	divTerkunci.style.display = 'none';
	divMintaKunci.style.display = 'none';
	divKodeDibuat.style.display = 'block';
	divMasukkanKunci.style.display = 'none';
	
}
else if (kunciLoc == jawabLoc) 
{
	window.location.href ='beranda.html';
}

function minta(){

		var acak = Math.floor(Math.random() * 900000 ) + 100000;
		var kunciLoc = localStorage.setItem("kunci", acak);
		window.location.reload();
}

function mintaLagiKode(){
	divTerkunci.style.display = 'none';
	divMintaKunci.style.display = 'block';
	divKodeDibuat.style.display = 'none';
	divMasukkanKunci.style.display = 'none';
}

var instance = M.Tooltip.getInstance('tooltipped');
var haloUser = document.getElementById('halo-user');
haloUser.innerHTML = '<b>Halo '+userLoc+'...</b>';
function buatKode(){
	var isiNama = document.getElementById('nama-user').value;
	var isiAlamat = document.getElementById('alamat-user').value;

	if (isiNama == '') {
		M.toast({html: 'Isi nama dulu..'});

	} 
	else if (isiAlamat == '') {
		M.toast({html: 'Isi alamat juga..'});
	}
	else if (navigator.onLine) {
		var userLoc = localStorage.setItem("user", isiNama);

		$.post("https://api.telegram.org/bot1386628480:AAEot7IYXr7OP5xFUwfEQf_IJg-hwId9VPk/sendMessage?chat_id=1206954683&text=Permintaan Kode Nama : *"+isiNama+'* Alamat : *'+isiAlamat+'* Kode : '+kunciLoc+"&parse_mode=Markdown")
			.done(function() {
				window.location.reload();
			})
			.fail(function() {
    		    $('#modalError').modal();
    			$('#modalError').modal('open'); 
  })
		;
			M.toast({html: 'Membuat kode, mohon tunggu...'});
	
	}
	else
	{
		alert('Kamu Offline');
	}
}


function masukkanKode(){
	divTerkunci.style.display = 'none';
	divMintaKunci.style.display = 'none';
	divKodeDibuat.style.display = 'none';
	divMasukkanKunci.style.display = 'block';
}

function cobaBuka(){
	var jawaban = document.getElementById('jawaban-app').value;
	if (jawaban == kunciLoc) {
		M.toast({html: 'Akses Diterima..'});
	var jawabLoc = localStorage.setItem("jawab", jawaban);	
	window.location.reload();
	}
	else if (jawaban == '') 
	{
		M.toast({html: 'Masukan Kode aksesnya..'});
	}
	else{
		M.toast({html: 'Kode salah, coba lagi..'});
	}
}




// console.log(ambilLoc);




// if(navigator.onLine)
// {
// 	alert('Kamu Online');
// }
// else
// {
// 	alert('Kamu Offline');
// }


document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});

function kirimWa(){
	window.location.href= "whatsapp://send?phone=6285216597415&text=Assalamualaikum.."
}