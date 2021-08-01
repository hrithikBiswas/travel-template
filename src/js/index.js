// import style css
import Swiper from "swiper";
import "../scss/style.scss";

/* ============= SHOW NAV MENU ============= */
const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    nav.classList.add("show__menu");
});

/* ============= REMOVE MENU ============= */
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    nav.classList.remove("show__menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));


/* ============= VIDEO ============= */
const video = document.getElementById('video-file'),
btn = document.getElementById('video-btn'),
btnIcon = document.getElementById('video-btn-icon')

const videoAction = () => {
    if(video.paused){
        video.play()

        btnIcon.classList.add('uil-pause')

        btnIcon.classList.remove('uil-play')

    }else{
        video.pause()

        btnIcon.classList.add('uil-play')
        btnIcon.classList.remove('uil-pause')

    }
}

btn.addEventListener('click', videoAction)

const resetVideo = () => {
    btnIcon.classList.add('uil-play')
    btnIcon.classList.remove('uil-pause')
}

video.addEventListener('ended', resetVideo)

/* ============= Header COLOR CHANGE ============= */
const header = document.getElementById('header')

const headerColor = () => {
        if(pageYOffset > 200) {
        header.classList.add('scroll-header')
        

    }else{
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', headerColor)

/* =============== SCROLL UP =============== */
const scroll = document.getElementById('scroll-up')

const showScrollBtn = () => {
    if(pageYOffset > 300){
        scroll.classList.add('show-scrollup')
    }else{
        scroll.classList.remove('show-scrollup')
    }
}

window.addEventListener('scroll', showScrollBtn)

const scrollTop = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

scroll.addEventListener('click', scrollTop)


/* =============== DARK THEME =============== */
const theme = document.getElementById('theme')
const themeText = document.getElementById('theme-text')

const themeAction = () =>{
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme')){
        theme.classList.add('uil-sun')
        theme.classList.remove('uil-moon')
        themeText.innerHTML = 'Light Mode'
    }else{
        theme.classList.add('uil-moon')
        theme.classList.remove('uil-sun')
        themeText.innerHTML = 'Dark Mode'
    }
}

theme.addEventListener('click', themeAction)

/* =============== ACTIVE LINK =============== */

const onScroll = () =>{
    const linkItem = document.querySelectorAll('#nav-menu a')
    const scrollPosition = window.pageYOffset;

    linkItem.forEach((el) => {
        let attr = el.getAttribute('href');
        let section = document.querySelector(attr);
        let top = section.offsetTop - 80;
        let topHeight = section.offsetHeight + top;

        if(scrollPosition >= top && scrollPosition < topHeight ){
            el.classList.add('active')
        }else{
            el.classList.remove('active')
        }

        console.log(topHeight)
    })


}

window.addEventListener('scroll', onScroll)

