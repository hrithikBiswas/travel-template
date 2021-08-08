// import Swiper JS
import Swiper from "swiper/swiper-bundle.min.js";
// import Swiper styles
import "swiper/swiper.scss";

/* ============= SWIPER ============= */
const swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 32,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },
});
