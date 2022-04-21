(function($){
  $(function(){

  	// Navigasi
    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space



var kunciLoc = localStorage.getItem("kunci");
var jawabLoc = localStorage.getItem("jawab");
var userLoc = localStorage.getItem("user");

console.log('Jawaban Lokal :'+jawabLoc);
console.log('Kunci Lokal :'+kunciLoc);
console.log('User Lokal :'+userLoc);

