  // data terpilih
  var username ="";
  var password ="";
  // data Nama
  $('#username').on('input', function() {
    username = $("#username").val();
    cekIsian();
  });

    // data No HP
  $('#password').on('input', function() {
    password = $("#password").val();
    cekIsian();
  });
  
function cekIsian(){
  if (username != "" && password != "") {
    $("#aktifkan-app").removeClass("disabled");
  }else{
    $("#aktifkan-app").addClass("disabled");
  }
}

$("#aktifkan-app").click(function(){
  console.log(username);
  console.log(password);
})