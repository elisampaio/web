console.log('yo its working');

// clicks nos .item
$(".item").click( function() {

  var w = $(window).height();
  var width = $(window).width();
  var h = Math.ceil((w * 15) / 100);
  var iW = Math.ceil(($(this).height() * 100) / 100);
  var th = $(this).height();

  var size = w * 0.15;
  console.log(th);
  console.log(size);
  // console.log(w);
  // console.log(h);
  // console.log(iW);
  // console.log(width);

    if (th == size) {
      console.log('open');
      $(this).css({
        'max-height': '1500px'
      });
      $(this).children('.item-title').children('h2').children('a').css({
        'display': 'inline-block'
      });
    } else {
      $(this).css({
        'max-height': '15vh'
      });
      $(this).children('.item-title').children('h2').children('a').css({
        'display': 'none'
      });
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
