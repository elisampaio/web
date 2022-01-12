console.log('yo its working');

// clicks nos .item
$(document).on("click", '.item', function() {

  var w = $(window).height();
  var width = $(window).width();
  var h = Math.ceil((w * 15) / 100);
  var iW = Math.ceil(($(this).height() * 100) / 100);

  // console.log(w);
  // console.log(h);
  // console.log(iW);


  if (width < 500) {
    if (iW == h) {
      $(this).css({'max-height': '1000px'});
      $(this).children('.item-title').children('h2').children('a').css({	'display': 'inline-block'});
    }
    else {
      $(this).css({'max-height': '15vh'});
      $(this).children('.item-title').children('h2').children('a').css({	'display': 'none'});
    }
  }

  // if (iW == h) {
  //   $(this).css({'max-height': '500px'});
  //   $(this).children('.item-title').children('h2').children('a').css({	'display': 'inline-block'});
  // }
  // else {
  //   $(this).css({'max-height': '15vh'});
  //   $(this).children('.item-title').children('h2').children('a').css({	'display': 'none'});
  // }


});
