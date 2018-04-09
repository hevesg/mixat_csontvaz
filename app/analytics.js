+function ($) {
  'use strict';
  
$.fn.extend({
  analytics: function () {
    $(this).each(function() {
      var _this = $(this);
      var ga_category   = 'link';
      var ga_event      = _this.attr('data-ga-event')     ? _this.attr('data-ga-event')     : null;
      var ga_label      = $(this).text();

      /* Set category */

      if (_this.attr('data-ga-category')) {
        ga_category = _this.attr('data-ga-category');                           // data-ga-category set
      } else if (_this.prop('tagName') == 'BUTTON') {
        ga_category = 'button';                                                 // tag is button
      } else if (_this.prop('tagName') == 'INPUT') {
        ga_category = 'button';                                                 // tag is input
      } else if (_this.find('img').length) {
        ga_category = 'image';                                                  // image inside tag
      } else if (_this.find('span[class~=glyphicon]').length) {
        ga_category = 'icon';                                                   // Icon link
      }

      /* Set category */

      if (_this.attr('data-ga-label')) {
        ga_label = _this.attr('data-ga-label');                                 // data-ga-label set
      } else if (_this.find('img').length) {
        ga_label = _this.find('img').attr('alt');                               // image inside tag picks up alt attr
      } else if (_this.val()) {
        ga_label = _this.val();                                                 // Has value picks up value
      } else if (_this.find('[class~=glyphicon]').length) {
        var cl = _this.find('[class~=glyphicon]').attr('class').match(/(glyphicon-[a-z]+)/);
        ga_label = cl[1];
      }

      _this.on('click', function() {
        if (!ga_event) {
          ga_event = 'click';
        }
        ga('send', 'event', ga_category, ga_event, ga_label);
      });
    });
    return $(this);
  },
  scrollCheck: function() {
    var documentST = Math.floor($(document).scrollTop() / ($(document).height()-$(this).height()) * 4);
    var scrollEvent = 'scroll down';
    $(window).scroll(function() {
      var documentST_current = Math.floor($(document).scrollTop() / ($(document).height()-$(window).height()) * 4);
      if (documentST_current != documentST) {
        if (documentST_current > documentST) {
          scrollEvent = 'scroll down';
        } else if (documentST_current < documentST) {
          scrollEvent = 'scroll up';
        }
        ga('send', 'event', 'document', scrollEvent, (documentST_current * 25)+'%');
        documentST = documentST_current;
      }
    });
  }
});
$(document).ready(function() {
  if (typeof ga != "undefined") {
    $('a[href], button, input[type=button], input[type=submit]').analytics();
    $(window).scrollCheck();
  }
});
}(jQuery);
