const mobileNav = document.querySelector('.mobile-nav');
const primaryNav = document.querySelector('.primary-navigation');
const hamburger = document.querySelector('.nav-icon-hamburger');
const close = document.querySelector('.nav-icon-close');
const header = document.querySelector('.primary-header')

mobileNav.addEventListener('click', ()=>{
    primaryNav.classList.toggle('show')
    hamburger.classList.toggle('hide')
    close.classList.toggle('show')
    header.toggleAttribute('data-overlay')
})