$(function () {
  // 슬라이드
  var i = 0;

  function slide() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    $('.slide ul').animate({ left: -100 * i + '%' }, 1000);
  }

  setInterval(slide, 2000);

  // 팝업창
  $('.pp').click(function () {
    $('.popBg').show();
    return false;
  });
  $('.close').click(function () {
    $('.popBg').hide();
    return false;
  });

  // 메뉴네비
  $('nav>ul>li').mouseenter(function () {
    $(this).children('.sub').stop().slideDown();
  });
  $('nav>ul>li').mouseleave(function () {
    $('.sub').stop().slideUp();
  });
});
