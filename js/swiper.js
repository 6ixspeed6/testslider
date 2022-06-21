new Swiper('.swiper', {
   spaceBetween: 30,
   slidesPerView: 3,
   grabCursor: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      600: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   }
});