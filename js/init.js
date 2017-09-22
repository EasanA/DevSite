(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel();

$(document).ready(function () {
    // Plugin initialization
    $('.slider').slider();
})

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space