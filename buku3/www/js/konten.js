var konten = document.getElementById('konten');
var juml = 100;
var mulai = 1;
var halaman = '';

for (var i = 1; i <= juml; i++) {
	if (i <= juml) {
		var div1 = document.createElement('div');
		div1.classList='kotak';
		div1.style.backgroundImage="url('img/"+i+".webp')";
		div1.style.backgroundSize= "cover";
		// div1.style[
		// width='500px',
		// height='500px',
		// backgroundImage= "url('img/"+i+".webp')",
		// backgroundSize= "cover"]
		
		// var img = document.createElement("img");
	 //    img.src = 'img/'+i+'.webp';
	 //    img.id = i;
	 //    img.classList= "responsive-img";

	    konten.ontouchstart= function(){
	    	var hal =(event.srcElement.id);
	    	console.log(hal);
	    	var judul = document.getElementById('logo-jdl');
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
    konten.append(div1);
	}
}



// Hide show
function hideR(){
	var header = document.getElementById('header-bar');
    var ngambang = document.getElementById('ngambang');
      header.classList.toggle("header-hide");
      ngambang.classList.toggle("header-hide");
	

}


// UKURAN

// var imeg = document.querySelector('gmbr');
// console.log(img.clientWidth);
// var lebar = window.innerWidth;
// var tinggi = window.innerHeight;
// console.log(lebar);
// console.log(tinggi);
// var tambah = +50;
// var kurang= -50;
// konten.style.width=lebar+tambah+'px';
//  $(document).ready(function(){
//     konten.style.marginLeft= "-25px !important";
// konten.style.marginRight="-25px !important";
//   });


function perbesar(){

  M.toast({html: 'Berhasil diperbesar'});
}




 

function reset(){
  M.toast({html: 'Direset'});
}

function perkecil(){
  M.toast({html: 'Diperkecil'});
}



// Hammer just
// function hammerIt(elm) {
//     hammertime = new Hammer(elm, {});
//     hammertime.get('pinch').set({
//         enable: true
//     });
//     var posX = 0,
//         posY = 0,
//         scale = 1,
//         last_scale = 1,
//         last_posX = 0,
//         last_posY = 0,
//         max_pos_x = 0,
//         max_pos_y = 0,
//         transform = "",
//         el = elm;

//     hammertime.on('doubletap pan pinch panend pinchend', function(ev) {
//         if (ev.type == "doubletap") {
//             transform =
//                 "translate3d(0, 0, 0) " +
//                 "scale3d(2, 2, 1) ";
//             scale = 2;
//             last_scale = 2;
//             try {
//                 if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != "matrix(1, 0, 0, 1, 0, 0)") {
//                     transform =
//                         "translate3d(0, 0, 0) " +
//                         "scale3d(1, 1, 1) ";
//                     scale = 1;
//                     last_scale = 1;
//                 }
//             } catch (err) {}
//             el.style.webkitTransform = transform;
//             transform = "";
//         }

//         //pan    
//         if (scale != 1) {
//             posX = last_posX + ev.deltaX;
//             posY = last_posY + ev.deltaY;
//             max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
//             max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
//             if (posX > max_pos_x) {
//                 posX = max_pos_x;
//             }
//             if (posX < -max_pos_x) {
//                 posX = -max_pos_x;
//             }
//             if (posY > max_pos_y) {
//                 posY = max_pos_y;
//             }
//             if (posY < -max_pos_y) {
//                 posY = -max_pos_y;
//             }
//         }


//         //pinch
//         if (ev.type == "pinch") {
//             scale = Math.max(.999, Math.min(last_scale * (ev.scale), 4));
//         }
//         if(ev.type == "pinchend"){last_scale = scale;}

//         //panend
//         if(ev.type == "panend"){
//             last_posX = posX < max_pos_x ? posX : max_pos_x;
//             last_posY = posY < max_pos_y ? posY : max_pos_y;
//         }

//         if (scale != 1) {
//             transform =
//                 "translate3d(" + posX + "px," + posY + "px, 0) " +
//                 "scale3d(" + scale + ", " + scale + ", 1)";
//         }

//         if (transform) {
//             el.style.webkitTransform = transform;
//         }
//     });
// }

