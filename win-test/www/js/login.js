$('#logo').animate({
  opacity: 1,
}, 3000 );
$('#alamat').animate({
  width: "100%",
  opacity: 1,
}, 2000 );
$('#isi-welocome').delay( 4000 ).fadeOut( 1000 );

// Cek Isi
var usr='';
var pass='';
 $('#input-username').on('change', function(){
  usr = $('#input-username').val().toLowerCase();
  $('#input-username').val(usr);
  cekIsi();
});
$('#input-password').on('change', function(){
 pass = $('#input-password').val();
 cekIsi();
});
function cekIsi(){
 if (usr != '' && pass != '') {
   $('#tmbl-login').removeClass('disabled');
 }
}
// Login
 $(document).ready(function() {
 $('#tmbl-login').click(function() {
    var username = $('#input-username').val();
    var password = $('#input-password').val();
    var remember = '';
    if ($('#remember').is(':checked')) {
      remember = $('#remember').val();
    };
    $.ajax({
    url: "cek-login.php",  
    type: "POST",        
    data: { username:username, password:password, remember:remember },
    success: function (status) {
    if (status == "Login") {
        $.ajax({
        url:"rute.php",
        success:function(rute) {
          $(location).attr('href',rute)
        } 
      });
    }else if(status == "Password Salah"){
      alert(status);
    }else if(status == ""){
      alert("Username tidak ditemukan");
    }else{
      alert(status);
    }
  }
    });
 });
 });
