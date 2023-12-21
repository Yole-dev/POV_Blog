`use strict`;


// toggling the navigation bar for mobile view
const nav = document.querySelector('.nav');
const mobileNav = document.querySelector('.mobileNav');
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');

openNav.addEventListener('click', function(){
    mobileNav.style.display = 'flex';
    nav.style.display = 'none';
});

closeNav.addEventListener('click', function(){
    mobileNav.style.display = 'none';
    nav.style.display = 'flex';
})

//toggling the themes for the webpage
const dayThemeActive = document.querySelector('.dayThemeActive');
const nightThemeActive = document.querySelector('.nightThemeActive');

const dayThemeInactive = document.querySelector('.dayThemeInactive');
const nightThemeInactive = document.querySelector('.nightThemeInactive');

//  <ion-icon name="sunny" class="dayThemeInactive"></ion-icon> 
{/* <ion-icon name="moon" class="nightThemeInactive"></ion-icon> */}

