import Swiper from "swiper/bundle";

const options = {
  speed: 1000,
  loop: true,
  updateOnWindowResize: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      enabled: true,
    },
    320: {
      slidesPerView: 1.3,
      enabled: true,
    },
    360: {
      slidesPerView: 1.47,
      enabled: true,
    },
    390: {
      slidesPerView: 1.6,
      enabled: true,
    },
    420: {
      slidesPerView: 2,
      enabled: true,
    },
    768: {
      enabled: false,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },
};

let swiper = new Swiper(".swiper", options);

window.addEventListener("orientationchange", () => {
  swiper.destroy;
  swiper = new Swiper(".swiper", options);
});
