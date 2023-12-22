`use strict`;

//body components
const body = document.querySelector('body');



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
const themeSwitch = document.querySelector('.themeSwitch')

const dayThemeActive = document.querySelector('.dayThemeActive');
const nightThemeActive = document.querySelector('.nightThemeActive');

const dayThemeInactive = document.querySelector('.dayThemeInactive');
const nightThemeInactive = document.querySelector('.nightThemeInactive');

const root = document.querySelector(':root');

//  <ion-icon name="sunny" class="dayThemeInactive"></ion-icon> 
//<ion-icon name="moon" class="nightThemeInactive"></ion-icon> 

dayThemeActive.addEventListener('click', function(){
    body.style.background = 'white';

    root.style.setProperty('--themeBackground', 'white');
    root.style.setProperty('--themeText', 'black');
    root.style.setProperty('--shadow', '0px 0px 3px black');
});

nightThemeActive.addEventListener('click', function(){
    body.style.background = 'black';

    root.style.setProperty('--themeBackground', 'black');
    root.style.setProperty('--themeText', 'white');
    root.style.setProperty('--shadow', '0px 0px 3px white');
});