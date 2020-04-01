// $(document).ready(function() {
//     //Preloader
//     preloaderFadeOutTime = 500;
//     function hidePreloader() {
//     var preloader = $('.preloader-container');
//     preloader.fadeOut(preloaderFadeOutTime);
//     }
//     hidePreloader();
//     });

const loader = document.querySelector('.preloader-container');
const main = document.querySelector('.fp-container');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}

init();



const scrollTo = id =>{
    const element = document.getElementById('About');
    element.scrollIntoView();
}

window.sr = ScrollReveal();

ScrollReveal().reveal({delay:1000});

//ScrollReveal().reveal('.fp-container', { delay: 2000 });

sr.reveal('.main-navbar', {
    duration:5000,
    origin:'bottom'
});

window.sr = ScrollReveal();

sr.reveal('.cover-image', {
    duration:7000,
    origin:'top',
    distance:'300px'
});

sr.reveal('.cover-text', {
    duration:7000,
    origin:'left',
    distance:'300px'
});

sr.reveal('.workbtn a', {
    duration:7000,
    origin:'left',
    distance:'300px'
});

sr.reveal('.animate-about', {
    duration:1500,
    origin:'right',
    distance:'300px'
});

sr.reveal('.cover-image-2', {
    duration:2500,
    origin:'top',
    distance:'300px'
});

sr.reveal('.container-contact', {
    duration:3400,
    origin:'bottom',
    distance:'400px'
})

