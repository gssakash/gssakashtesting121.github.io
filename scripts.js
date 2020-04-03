// $(document).ready(function() {
//     //Preloader
//     preloaderFadeOutTime = 500;
//     function hidePreloader() {
//     var preloader = $('.preloader-container');
//     preloader.fadeOut(preloaderFadeOutTime);
//     }
//     hidePreloader();
//     });

// const scrollTo = id =>{
//     const element = document.getElementById('About');
//     element.scrollIntoView();
// }


const loader = document.querySelector('.preloader-container');
const main = document.querySelector('.fp-container');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4080);
}

init();


window.sr = ScrollReveal();

 sr.reveal('.main-navbar', {
     duration:6000,
     origin:'bottom'
 });

sr.reveal('.social-icons', {
        duration:2500,
        origin:'left'
    });


sr.reveal('.cover-image', {
    duration:10000,
    origin:'top',
    distance:'300px'
});

sr.reveal('.cover-text', {
    duration:10000,
    origin:'left',
    distance:'300px'
});

sr.reveal('.workbtn a', {
    duration:9000,
    origin:'left',
    distance:'300px'
});

sr.reveal('.animate-about', {
    duration:5000,
    origin:'right',
    distance:'300px'
});

sr.reveal('.cover-image-2', {
    duration:3000,
    origin:'top',
    distance:'300px'
});

sr.reveal('.container-contact', {
    duration:3400,
    origin:'bottom',
    distance:'400px'
})

