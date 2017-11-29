(function($){
  $(function(){
    $.lazyLoadXT.onload = function() {
        var $el = $(this);
        $el
            .removeClass('lazy-hidden')
            .addClass('animated ' + $el.attr('data-effect'));
    };
    $('.button-collapse').sideNav();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.slider').slider();
    $('select').material_select();
    $('.modal').modal();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('ul.tabs').tabs();
    $(document).ready(function(){
    $('.target').pushpin({
      top: 500,
      bottom: 2000,
      offset: 70
    });
  });
});
})(jQuery); // end of jQuery name space