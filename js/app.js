// 모바일 메뉴바 부분

// index 슬라이드 부분

// swiper

$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 5.5,
    spaceBetween: 10,
    autoplay: {
      delay: 3000, // 시간 설정
    },
    // Responisve breakpoint
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 4,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
      1300: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
    },
  });
});
