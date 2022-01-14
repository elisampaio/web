console.log('yo its working');

$(".title-div").css({'background': 'blue'});

// clicks nos .item
$(".item").click( function() {

  var w = $(window).height();
  var width = Math.ceil($(window).width());
  var h = Math.ceil((w * 15) / 100);
  var iW = Math.ceil(($(this).height() * 100) / 100);


  var th = Math.floor($(this).height());
  var size =  Math.floor(w * 0.15);
  console.log(th);
  console.log(size);
  // console.log(w);
  // console.log(h);
  // console.log(iW);
  // console.log(width);

    if (th <= (size + 20) && th > (size - 20) ) {
      console.log('open');
      $(this).css({
        'max-height': '1500px'
      });
      $(this).children('.item-title').children('h2').children('a').css({
        'display': 'inline-block'
      });
    } else {
      // alert("sorry :'(");
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


$(".note-div").click( function() {

  $(".note-div").css({'top': '-110vh'});

  $(".filler").delay(200).queue( function() {
    $(".filler").css({'top': '-100vh'});
  });

  $(".sub-div").delay(400).queue( function() {
    $(".sub-div").css({'top': '-100vh'});
  });

  $(".title-div").delay(700).queue( function() {
    $(".title-div").css({'top': '-20vh'});
    $(".title-div").css({'height': '10vh', 'font-size': '3em', 'color': 'red'});
  });

  $(".lang-div").delay(800).queue( function() {
    $(".lang-div").css({'top': '-100vh'});
  });

  $(".title-div").delay(800).queue( function() {
      $(".title-div").css({'height': '10vh', 'font-size': '1em', 'color': 'red'});
  });




});
