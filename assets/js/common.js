//------------------------------------------------------------
//toggle
//------------------------------------------------------------
$(function(){
  $('.l-header__toggle').on('click', function() {
    $(this).toggleClass('open');
    $(".l-header__inner").toggleClass('active');
    return false;
  });
});

$(".l-header__inner a").click(function () {
  $("l-header__toggle").removeClass('open'); //クラス除去
  $(".l-header__inner").removeClass('active'); //クラス除去
});

//------------------------------------------------------------
//swiper
//------------------------------------------------------------
window.onload = function () {
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.8, //画像を何枚表示するか
    spaceBetween: 20, //何ピクセル画像の間隔をあけるか
    centeredSlides: true, //見切らせたい場合メイン画像をセンターにもってくるか
    //自動再生する場合
    autoplay: {
      delay: 3000, //3秒後に次の画像に代わる
    },
    loop: true, //最後の画像までいったらループする
    //ページネーションをつける場合
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    //左右のナビゲーションをつける場合
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}
//------------------------------------------------------------
//smooth scroll
//------------------------------------------------------------
$(function () {
  $('a[href^="#"]').click(function () {
    let adjust = 0;
    let speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
//------------------------------------------------------------
//pagetop
//------------------------------------------------------------
$(function () {
  const pageTop = $("#c-pagetop");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) { 
      pageTop.fadeIn(); 
    } else {
      pageTop.fadeOut(); 
    }
  });
  pageTop.click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      500 
    );
    return false;
  });
});