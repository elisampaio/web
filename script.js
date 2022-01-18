console.log('yo its working');

// clicks nos .item
$(".item").click(function() {
  $(this).children(".item-contents").slideToggle();
  $(this).children(".item-title").children('h2').children('a').toggle();
});

// click para entrar
$(".note-div").click(function() {

  $(".note-div").css({
    'top': '-110vh'
  });

  $(".filler").delay(150).queue(function() {
    $(".filler").css({
      'top': '-100vh'
    });
  });

  $(".sub-div").delay(200).queue(function() {
    $(".sub-div").css({
      'top': '-100vh'
    });
  });

  $(".title-div").delay(350).queue(function() {
    $(".title-div").css({
      'top': '0vh'
    });
  });

  setTimeout(dos, 400);

  $(".lang-div").delay(500).queue(function() {
    $(".lang-div").css({
      'top': '-100vh'
    });
  });

  setTimeout(appear, 900);
});

function dos() {
  var screenW = $(window).width();

  if (screenW >= 992) {
    $(".title-div").css({
      'height': '7vh',
      'font-size': '1.2em',
      'font-weight': '300'
    });

    $("h1").css({
      'margin-left': '-1.5vw'
    });

  } else if (screenW >= 800 && screenW < 992) {
    $(".title-div").css({
      'height': '7vh',
      'font-size': '1.7em',
      'font-weight': '300'
    });
  } else if (screenW >= 500  && screenW < 800) {
    $(".title-div").css({
      'height': '10vh',
      'font-size': '1.5em',
    });
  } else {
    $(".title-div").css({
      'height': '10vh',
      'font-size': '1.3em',
    });
  }
}

function appear() {
  $('#list').css({
    'opacity': '1'
  });
}
