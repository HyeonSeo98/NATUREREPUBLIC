$(function() {

  let cateOpen = $('.lnb_outer .open')
  let lnbList = $('.lnb_outer .list')

  cateOpen.click(function() {
    lnbList.slideToggle('fast')
  })

  let mobMenubar = $('.mob_menu .xi-bars')
  let mobMenuclo = $('.mob_menu_box .xi-close')
  let mobMenuBox = $('.mob_menu_box') 
  
  mobMenubar.click(function() {
    mobMenuBox.stop().animate({
      left : 0
    },1000)
    mobMenubar.css('display','none')
    mobMenuclo.css('display','block')
  })
  mobMenuclo.click(function() {
    mobMenuBox.stop().animate({
      left : -1024
    },800)
    mobMenubar.css('display','block')
    mobMenuclo.css('display','none')
  })


  //모바일,태블릿 메뉴
  $('.mob_menu_box .btn_li_menu .skin').click(function() {
    $('.btn_li_menu .skin_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .from').click(function() {
    $('.btn_li_menu .form_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .mask').click(function() {
    $('.btn_li_menu .mask_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .makeup').click(function() {
    $('.btn_li_menu .makeup_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .point').click(function() {
    $('.btn_li_menu .point_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .ssun').click(function() {
    $('.btn_li_menu .ssun_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .body').click(function() {
    $('.btn_li_menu .body_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .man').click(function() {
    $('.btn_li_menu .man_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .brush').click(function() {
    $('.btn_li_menu .brush_li').slideToggle('slow')
  })
  $('.mob_menu_box .btn_li_menu .set').click(function() {
    $('.btn_li_menu .set_li').slideToggle('slow')
  })

  // 카테고리
  let cate_ho = $('.list .cate_list>ul>li')
  
  cate_ho.mouseover(function() {
    let cate_ho_num = $(this).index()


    if(cate_ho_num == 0) {
      cate_ho.eq(0).addClass('on')
    }else {
      cate_ho.eq(0).removeClass('on')
    }
    if(cate_ho_num == 1) {
      cate_ho.eq(1).addClass('on')
    }else {
      cate_ho.eq(1).removeClass('on')
    }
    if(cate_ho_num == 2) {
      cate_ho.eq(2).addClass('on')
    }else {
      cate_ho.eq(2).removeClass('on')
    }
    if(cate_ho_num == 3) {
      cate_ho.eq(3).addClass('on')
    }else {
      cate_ho.eq(3).removeClass('on')
    }
    if(cate_ho_num == 4) {
      cate_ho.eq(4).addClass('on')
    }else {
      cate_ho.eq(4).removeClass('on')
    }
    if(cate_ho_num == 5) {
      cate_ho.eq(5).addClass('on')
    }else {
      cate_ho.eq(5).removeClass('on')
    }
    if(cate_ho_num == 6) {
      cate_ho.eq(6).addClass('on')
    }else {
      cate_ho.eq(6).removeClass('on')
    }
    if(cate_ho_num == 7) {
      cate_ho.eq(7).addClass('on')
    }else {
      cate_ho.eq(7).removeClass('on')
    }
    if(cate_ho_num == 8) {
      cate_ho.eq(8).addClass('on')
    }else {
      cate_ho.eq(8).removeClass('on')
    }
    if(cate_ho_num == 9) {
      cate_ho.eq(9).addClass('on')
    }else {
      cate_ho.eq(9).removeClass('on')
    }

  })


  // 메인 비주얼 슬라이더
  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });



  //추천 상품 모바일 슬라이더
  var swiper = new Swiper(".mob_mySwiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  }); 
  //추천 상품 태블릿 슬라이더
  var swiper = new Swiper(".tab_mySwiper", {
    slidesPerView: 2,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  // 랭킹 상품
  let count = 0
  let loop = setInterval(function() {

    $('.view_rank input').eq(count).prop('checked',true)
    count++
    if(count == 5) {
      count = 0
    }
  },2000)


  //스크롤 탑
  $(window).scroll(function() {
    if($(this).scrollTop() >= 200) {
      $('.scroll_top').fadeIn('fast')
    }else {
      $('.scroll_top').fadeOut('fast')
    }
  })

  $('.scroll_top').click(function() {
    $(window).scrollTo({top:0,left:0},800)
  })
  
})