var kelas = window.localStorage.getItem("kelas");
var semester = window.localStorage.getItem("semesterSkrg");
var thnAjar = window.localStorage.getItem("tAjarSkrg");
url = 'https://script.google.com/macros/s/AKfycbwsqGJIRFcqK3-Bu7cCOfyYqh2MN8T2ZuItu0r4r8kZam8dBiGP/exec';
cekMrd = new XMLHttpRequest();
cekMrd.onreadystatechange = function() {
  console.log(cekMrd.status);
  if (this.readyState == 4 && this.status == 200) {
    var data=JSON.parse(cekMrd.responseText);
    has = data.hasil;
    console.log(has);
    $('#ditambah').removeClass( "disabled" );
    $('#diedit').removeClass( "disabled" );
    $('#loader').hide();
    for (var i = 0; i < has.length; i++) {
    if (has[0].Mata_Pelajaran == "None") {
      $('#auto_urut select').val(has.length);
      $('#auto_urut').text(has.length);
      $('#loader').hide();
      $('#infoh').html('Belum ada data..');
      $('#ditambah').removeClass( "disabled" );
      $('#diedit').addClass( "disabled" );

    }else {
      $('#auto_urut select').val(has.length +1);
      $('#auto_urut').text(has.length +1);
      $('#data-tabel').show();
      $('#footer-next').show();

    }
    let no = i +1;
    let pilpil = $('<option value="'+no+'">'+no+'</option>');
    $('#select_edit').append(pilpil);

    let nomor = has[i].No;
    let name = has[i].Mata_Pelajaran;
    let tr = $('<tr></tr>');
    let dNo = $('<td>'+nomor+'</td>');
    let dNa = $('<td>'+name+'</td>');
    tr.append(dNo);
    tr.append(dNa);
    $('#body_tabel').append(tr);
    }

    $( "#select_edit" ).change(function() {
      let t = $('#select_edit :selected').val();
      let terp = t -1;
      $('#nama_edit').removeAttr('disabled');
      $('#nama_edit').val(has[terp].Mata_Pelajaran);
      $('#akan_hps').html(has[terp].Mata_Pelajaran);
    });

  }
}

  cekMrd.open("GET", url+"?action=read&kelas="+kelas+"&ta="+thnAjar+"&semester="+semester+"&sheet=Data Pelajaran", true);
  cekMrd.send();

tmbhMrd = new XMLHttpRequest();
tmbhMrd.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    $('#jdl_tambah').html('Sukses..');
    $('#lagi_nambah').hide();
    setTimeout(function(){
     $('#modal-tambah').modal("close");
     location.reload();
   }, 1700);

  }}
  function tambahMurid(){
    let nam = $('#nama_lengkap').val();
    if (nam =="") {
      M.toast({html: 'Pelajaran tidak boleh kosong...'});
      $('#nama_lengkap').css('border','2px solid red');
    }else {
      let nom = $('#no_urut :selected').text()
      tmbhMrd.open("GET", url+"?action=insert&kelas="+kelas+"&ta="+thnAjar+"&semester="+semester+"&sheet=Data Pelajaran&nomor="+nom+"&isi="+nam, true);
      tmbhMrd.send();
      $('#lagi_nambah').show();
      $('#oto_nom').hide();
    }

  }


  updtMrd = new XMLHttpRequest();
  updtMrd.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $('#lagi_edit').hide();
      $('#jdl_edit').addClass('red-text');
      $('#jdl_edit').html('Sukses');
      setTimeout(function(){
       $('#modal_edit').modal("close");
       location.reload();
     }, 1700);
    }}
  function updateMurid(){
    let namUpdt = $('#nama_edit').val();
    if (namUpdt == "") {
      M.toast({html: 'Pilih nomor dulu...'});
    }else{
      let noUpdt = $('#select_edit :selected').val();
      updtMrd.open("GET", url+"?action=update&kelas="+kelas+"&ta="+thnAjar+"&semester="+semester+"&sheet=Data Pelajaran&nomor="+noUpdt+"&nama="+namUpdt, true);
      updtMrd.send();
      $('#lagi_edit').show();
    }
  }


  hpsMrd = new XMLHttpRequest();
  hpsMrd.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $('#lagi_edit').hide();
      $('#jdl_edit').addClass('red-text');
      $('#jdl_edit').html('Sukses');
      setTimeout(function(){
       $('#modal_edit').modal("close");
       location.reload();
     }, 1700);
    }}

    function benernih(){
      let namHps = $('#nama_edit').val();
      if (namHps == "") {
        M.toast({html: 'Pilih nomor dulu...'});
      }else {
        $('#modal_edit').modal("close");
        $('#modal_konfir_hps').modal("open");

      }
    }

  function hapusMurid(){
      let namHps = $('#nama_edit').val();
      let noHps = $('#select_edit :selected').val();
      if (has.length == 1) {
      tmbhMrd.open("GET", url+"?action=insert&kelas="+kelas+"&ta="+thnAjar+"&semester="+semester+"&sheet=Data Pelajaran&nomor="+noHps+"&isi=None", true);
      tmbhMrd.send();
      }
      hpsMrd.open("GET", url+"?action=delete&kelas="+kelas+"&ta="+thnAjar+"&semester="+semester+"&sheet=Data Pelajaran&nama="+namHps, true);
      hpsMrd.send();
      $('#lagi_edit').show();

  }
