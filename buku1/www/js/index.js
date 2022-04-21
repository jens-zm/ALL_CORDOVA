
// var num = 2;

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
// 	if (xhr.readyState == 4 && xhr.status == 200){
// 		let data = JSON.parse(this.responseText);
// 		console.log(data);
// 		var aku = data.satu.hal;
// 		console.log(aku);
// 	}
// }
// xhr.open('GET', 'config.json', true);
// xhr.send();

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      
      // Set AdMobAds options:
      admob.setOptions({
        publisherId:           "ca-app-pub-3940256099942544/6300978111",  // Required
        interstitialAdId:      "ca-app-pub-3940256099942544/1033173712",  // Optional
        autoShowBanner:        true,                                      // Optional
        autoShowRInterstitial: false,                                     // OptionalOptional
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();
      
      // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();
 
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);


var konten = document.getElementById('konten');
var juml = 100;
var mulai = 1;
var lebar = window.innerWidth;
var halaman = '';

for (var i = 1; i <= juml; i++) {
	if (i <= juml) {
		var img = document.createElement("img");
	    img.src = 'img/'+i+'.webp';
	    img.width = lebar;
	    img.id = i;
	    img.ontouchstart= function(){
	    	var hal =(event.srcElement.id);
	    	console.log(hal);
	    	var judul = document.getElementById('logo-container');
	    	if (hal <= 1) {
	    		judul.innerHTML = 'Akidah Akhlak Kelas 1';
	    	} else if (hal <= 2) {
	    		judul.innerHTML = 'Laman Pengesahan';
	    	} else if (hal <= 3) {
	    		judul.innerHTML = 'Kata Pengantar';
	    	} else if (hal == 4 || hal <= 5) {
	    		judul.innerHTML = 'Pedoman Transliterasi';
	    	} else if (hal == 6) {
	    		judul.innerHTML = 'Daftar Isi';
	    	}
	    };

    // This next line will just add it to the <body> tag
    konten.append(img);
	}
}

