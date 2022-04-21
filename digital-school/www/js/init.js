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
          'Augustus',
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
    $('#modal-swich').modal({dismissible: false})
    $('.dropdown-trigger').dropdown();
    $('.btn-floating').floatingActionButton();
    $('.tabs').tabs();
    $('#isi-tugas').characterCounter();
    $('.sidenav').sidenav();
    $('#sidenav-1').sidenav({ edge: 'left' });
    $('#sidenav-2').sidenav({ edge: 'right' });

  }); // end of document ready
})(jQuery); // end of jQuery name space
