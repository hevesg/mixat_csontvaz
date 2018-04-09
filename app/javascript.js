+function ($) {
  'use strict';
  $(document).ready(function() {
    $('.to-page-header').appendTo('.page-header');
    /***********
    Elforgatunk veletlen szeruen minden .rotate es .thumbnail img elemet
    ***********/
    /*$('.rotate').each(function(e) {
      var deg = Math.random()*4-2;
      console.log($(this));
      $(this).css('transform', 'rotate('+deg+'deg)');
    });*/
  });
}(jQuery);
