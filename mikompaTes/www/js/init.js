

(function($){
  $(function(){


    $('.sidenav').sidenav();
    $('.datepicker').datepicker({
      format: 'd mmmm yyyy',
      showClearBtn: 1,
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



      $('select').formSelect();
      $('.collapsible').collapsible();
      $('#modal-hadir').modal({dismissible: false});
      $('#modal-sakit').modal({dismissible: false});
      $('#modal-izin').modal({dismissible: false});
      $('#modal-proses').modal({dismissible: false});
      $('#modal-tugas').modal({dismissible: false});
      $('#prks-dijawab').modal({dismissible: false});
      $('#sudah-dijawab').modal({dismissible: false});
      $('#modal-tambah').modal({dismissible: false});
      $('#modal_edit').modal({dismissible: true});
      $('#modal_konfir_hps').modal({dismissible: false});
      $('#avatar').materialbox();





  }); // end of document ready
})(jQuery); // end of jQuery name space
