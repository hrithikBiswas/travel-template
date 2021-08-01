// import swiper js
import ScrollReveal from "scrollreveal";

/* =============== SCROLL REVEAL =============== */
const rc = ScrollReveal({
    duration: 2000,
    distance: '60px'
})

rc.reveal('.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__img-overlay, .place__card, .sponsors__content, .footer__data, .footer__right', {
    origin: 'top',
    interval: 100
})
rc.reveal('.about__data, .video__description, .subscribe__description', {
    origin: 'left',
    interval: 100
})
rc.reveal('.about__img-overlay, .video__content, .subscribe__form', {
    origin: 'right',
    interval: 100
})