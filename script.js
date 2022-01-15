console.log('yo its working');

// $(".title-div").css({
//   'background': 'red'
// });

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

  $(".filler").delay(200).queue(function() {
    $(".filler").css({
      'top': '-100vh'
    });
  });

  $(".sub-div").delay(250).queue(function() {
    $(".sub-div").css({
      'top': '-100vh'
    });
  });

  $(".title-div").delay(350).queue(function() {
    $(".title-div").css({
      'top': '0vh'
    });
  });

  setTimeout(dos, 300);

  $(".lang-div").delay(500).queue(function() {
    $(".lang-div").css({
      'top': '-100vh'
    });
  });

  setTimeout(appear, 900);
});

function dos() {
  $(".title-div").css({
    'height': '10vh',
    'font-size': '3em',
  });

  // $(".courtain").fadeOut(500);
  // $('#list').css({
  //   'opacity': '1'
  // });
}

function appear() {
  $('#list').css({
    'opacity': '1'
  });
}
