/* Swiper */ 
var swiper = new Swiper(".trend-slider", {
    slidesPerView: 1,
    spaceBetween: 11,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
      loop: true,
    },
    autoplay: {
        delay: 2000,
        clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });