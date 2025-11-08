// Popular Swiper
var swiper = new Swiper(".popular", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  freeMode: true,
  keyboard: {
    enabled: true,
  },
});

// Search Function
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// Navbar Function
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// Header Function
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

// Beverages Right
sr.reveal('.beverages-img.right',{delay: 200, origin: 'right'})
sr.reveal('.beverages-img.left',{delay: 200, origin: 'left'})
sr.reveal('.beverages-text',{delay: 200, origin: 'bottom'})

// Popular
sr.reveal('.heading',{delay: 200, origin: 'top'})
sr.reveal('.popular',{delay: 200, origin: 'right'})

// About Us
sr.reveal('.about-container',{delay: 200, origin: 'bottom'})

