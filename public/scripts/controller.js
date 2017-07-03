'use strict';

$('#top-nav li').on('click', function(){
  var $selected = $(this).find('a').hasClass('selected');

  if(!$selected) {
    $('#top-nav a').removeClass('selected');
    $(this).find('a').addClass('selected');
    $('.screen').fadeOut();
    $('#' + $(this).data('content')).fadeIn();
  }
})
