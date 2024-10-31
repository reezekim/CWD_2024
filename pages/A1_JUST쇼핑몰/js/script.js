$(function () {
  //슬라이드
  var t = 0;
  function slide() {
    if (t < 2) {
      t++;
    } else {
      t = 0;
    }
    $('#slider ul').animate({ top: t * 300 * -1 }, 1000);
  }

  setInterval(slide, 2000);

  //탭메뉴
  $('.tabmenu li').click(function () {
    $('.tabmenu li').removeClass('on');
    $(this).addClass('on');

    var i = $(this).index();
    // console.log(i);
    $('.tabcont').hide();
    $('.tabcont').eq(i).show();

    return false;
  });

  // 팝업창
  $('.pop').click(function () {
    $('.popup').show();
    return false;
  });
  $('.popup .btn').click(function () {
    $('.popup').hide();
  });

  //메뉴
  $('nav>ul>li').mouseenter(function () {
    $('.sub').stop().slideDown();
  });
  $('nav>ul>li').mouseleave(function () {
    $('.sub').stop().slideUp();
  });
});
