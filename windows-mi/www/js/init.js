(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('#nav-mobile').sidenav({ edge: 'left' });
    $('#nav-notif').sidenav({ edge: 'right' });
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.datepicker').datepicker({
      format: 'd mmmm yyyy',
      showClearBtn: 0,
      i18n: {
        cancel: 'Batal',
        clear: 'Bersihkan',
        done: 'Okeh',
        months: [
          'Januari',
          'Februari',
          'Maret',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Agustus',
          'September',
          'Oktober',
          'November',
          'Desember'
        ],
        monthsShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'Mei',
          'Jun',
          'Jul',
          'Agu',
          'Sep',
          'Okt',
          'Nov',
          'Des'
        ],
        weekdays:[
          'Minggu',
          'Senin',
          'Selasa',
          'Rabu',
          'Kamis',
          'Jumat',
          'Sabtu'
        ],
        weekdaysShort:[
          'Min',
          'Sen',
          'Sel',
          'Rab',
          'Kam',
          'Jum',
          'Sab'
        ],
        weekdaysAbbrev:['M','S','S','R','K','J','S']
    }
    });
    $('.timepicker').timepicker({
      twelveHour:false
    });
    $('select').formSelect();
    $('#modal-tambah').modal({dismissible: false});
    $('#ganti-pass').modal({dismissible: false});
    $('#modal-sukses').modal();
    $('#modal-swich').modal({dismissible: false});
    $('#modal-konfig').modal({dismissible: false});
    $('#modal-data').modal({dismissible: false});
    $('#modal-hapus').modal({dismissible: false});
    $('#modal-proses').modal({dismissible: false});
    $('#modal-status').modal({dismissible: false});
    $('#modal-edit').modal({dismissible: false});
    $('#modal-tambah-ta').modal({dismissible: false});
    $('#modal-download').modal({dismissible: false});
    $('.dropdown-trigger').dropdown();
    $('.btn-floating').floatingActionButton();
    $('.tabs').tabs();
    $('#isi-tugas').characterCounter();
    $('.sidenav').sidenav();
    $('#sidenav-1').sidenav({ edge: 'left' });
    $('#sidenav-2').sidenav({ edge: 'right' });
    $('.materialboxed').materialbox();





  }); // end of document ready
})(jQuery); // end of jQuery name space


  $( ".body-konten" ).animate({
    opacity: 1,
  }, "slow" );
