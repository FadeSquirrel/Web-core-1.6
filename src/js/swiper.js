import Swiper from "swiper/bundle";

function initSwipers() {
  let swiper = {};

  swiper.brands = new Swiper("#swiper-brands", {
    speed: 1000,
    loop: true,
    updateOnWindowResize: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        enabled: true,
      },
      320: {
        slidesPerView: 1.1,
        enabled: true,
      },
      350: {
        slidesPerView: 1.3,
        enabled: true,
      },
      390: {
        slidesPerView: 1.5,
        enabled: true,
      },
      540: {
        slidesPerView: 2,
        enabled: true,
      },
      768: {
        enabled: false,
      },
    },

    pagination: {
      el: "#swiper-brands-pagination",
    },
  });

  swiper.devices = new Swiper("#swiper-repair-devices", {
    speed: 800,
    loop: true,
    updateOnWindowResize: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        enabled: true,
      },
      320: {
        slidesPerView: 1.1,
        enabled: true,
      },
      350: {
        slidesPerView: 1.3,
        enabled: true,
      },
      390: {
        slidesPerView: 1.5,
        enabled: true,
      },
      540: {
        slidesPerView: 2,
        enabled: true,
      },
      768: {
        enabled: false,
      },
    },

    pagination: {
      el: "#swiper-device-pagination",
    },
  });

  swiper.prices = new Swiper("#swiper-price", {
    speed: 800,
    loop: true,
    updateOnWindowResize: true,

    breakpoints: {
      0: {
        slidesPerView: 0.8,
        enabled: true,
      },
      320: {
        slidesPerView: 1,
        enabled: true,
      },
      350: {
        slidesPerView: 1.2,
        enabled: true,
      },
      390: {
        slidesPerView: 1.4,
        enabled: true,
      },
      580: {
        slidesPerView: 2,
        enabled: true,
      },
      768: {
        enabled: false,
      },
    },

    pagination: {
      el: "#swiper-price-pagination",
    },
  });

  return swiper;
}

let swiper = initSwipers();

// window.addEventListener("click", () => {
//   for (const key in swiper) {
//     swiper.key.destroy();
//   }
//   //swiper = new Swiper(".swiper", options);
// });
