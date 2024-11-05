$(function () {
  // 탭메뉴
  $('.tabmenu h2').click(function () {
    $('.tabmenu h2').removeClass('on');
    $(this).addClass('on');

    var t = $(this).index();
    $('.tabcon').hide();
    $('.tabcon').eq(t).show();
    return false;
  });
  // 슬라이드
  var i = 0;
  function slide() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    $('.slide ul li').fadeOut(1000);
    $('.slide ul li').eq(i).fadeIn(1000);
  }

  setInterval(slide, 3000);

  // 팝업
  $('.pp').click(function () {
    $('.popup').show();
    return false;
  });
  $('button').click(function () {
    $('.popup').hide();
  });

  //네비
  $('nav>ul>li').mouseenter(function () {
    $(this).find('.sub').stop().slideDown();
  });
  $('nav>ul>li').mouseleave(function () {
    $('.sub').stop().slideUp();
  });
});
