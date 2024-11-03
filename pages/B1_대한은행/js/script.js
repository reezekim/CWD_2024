$(function () {
  // 슬라이드
  var i = 0;
  function slide() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    $('#slider ul').animate({ left: 1200 * -1 * i }, 1000);
  }
  setInterval(slide, 2000);

  // 탭메뉴
  $('.tabmenu li').click(function () {
    $('.tabmenu li').removeClass('on');
    $(this).addClass('on');

    var t = $(this).index();
    $('.tabcon').hide();
    $('.tabcon').eq(t).show();
  });

  // 팝업창
  $('.pp').click(function () {
    $('.popup').show();
    return false;
  });
  $('.popup button').click(function () {
    $('.popup').hide();
  });

  // 메뉴네비
  $('nav>ul>li').mouseenter(function () {
    $('.sub').stop().slideDown();
  });
  $('nav>ul>li').mouseleave(function () {
    $('.sub').stop().slideUp();
  });
});
