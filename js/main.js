const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
    breakpoints: {
      900: {
        slidesPerView: 4
      },
      750: {
        slidesPerView: 2
      }
    },
  spaceBetween: 60,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


$(function(){
  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });
});
