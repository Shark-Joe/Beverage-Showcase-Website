let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
});


// ScrollReveal
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
  })
  
// Home
sr.reveal('.home-text span',{delay: 200, origin: 'left'})
sr.reveal('.home-text h1',{delay: 200, origin: 'left'})



  // Coffee
  sr.reveal('.coffee-img.left',{delay: 200, origin: 'left'})
  sr.reveal('.coffee-img.right',{delay: 200, origin: 'right'})
  sr.reveal('.coffee-text',{delay: 200, origin: 'bottom'})

  // Roast Level
  sr.reveal('.heading-1 span',{delay: 200, origin: 'top'})
  sr.reveal('.heading-1 h1',{delay: 200, distance:'0'})
  sr.reveal('.level-container .img-1 img',{delay: 50, origin: 'top'})
  sr.reveal('.level-container .img-2 img',{delay: 300, origin: 'top'})
  sr.reveal('.level-container .img-3 img',{delay: 500, origin: 'top'})
  sr.reveal('.level-container .box',{delay: 200, origin: 'bottom'})

  // Favored
  sr.reveal('.heading-2 h2',{delay: 100, origin: 'top'})
  sr.reveal('.favored-container',{delay: 100, origin: 'left'})
  