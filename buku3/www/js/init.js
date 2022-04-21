(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready

})(jQuery); // end of jQuery name space


 $(document).ready(function(){
    $('.parallax').parallax();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $('.dropdown-trigger').dropdown();


    $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  
