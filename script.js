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
    nav.style.opacity = '0';
});

closeNav.addEventListener('click', function(){
    mobileNav.style.display = 'none';
    nav.style.opacity = '1';
})

//toggling the themes for the webpage
const themeSwitch = document.querySelector('.themeSwitch')

const dayTheme = document.querySelector('.dayTheme');
const nightTheme = document.querySelector('.nightTheme')
// accessing the css variables
const root = document.querySelector(':root');


dayTheme.addEventListener('click', function(){
    body.style.background = 'white';

    root.style.setProperty('--themeBackground', 'white');
    root.style.setProperty('--themeText', 'black');
    root.style.setProperty('--shadow', '0px 0px 3px black');
    
    // indicating theme active states through visual changes
    dayTheme.setAttribute('name', 'sunny');
    nightTheme.setAttribute('name', 'moon-outline');
});

nightTheme.addEventListener('click', function(){
    body.style.background = 'black';

    root.style.setProperty('--themeBackground', 'black');
    root.style.setProperty('--themeText', 'white');
    root.style.setProperty('--shadow', '0px 0px 3px white');

    // indicating theme active states through visual changes
    dayTheme.setAttribute('name', 'sunny-outline');
    nightTheme.setAttribute('name', 'moon');

});



// mini form verification
const form = document.querySelector('#kyc');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const subEmail = document.querySelector('#subEmail');
const subBtn = document.querySelector('.subBtn');
const submitBtn = document.querySelector('.submitBtn');

//error messages
const fme = document.querySelector('.firstError');
const lme = document.querySelector('.lastError');
const eme = document.querySelector('.emailError');
const error = document.querySelector('errorMessage');
const see = document.querySelector('.subEmailError');

//validation
form.addEventListener('submit', function(e){
    e.preventDefault();

    // vailidation function for the main form
    checkInputs();

    //email validation function for the subscription form
    checkEmailInput();
});

//checks for email validity

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
    const first = firstName.value.trim();
    const last = lastName.value.trim();
    const emailAdd = email.value.trim();

    if(first === '') {
        fme.textContent = `First Name cannot be blank`;
    } ;

    if(last === '') {
        lme.textContent = `Last Name cannot be blank`;
    } ;

    //checking email validity

    if (emailAdd === '') {
        eme.textContent = `Email cannot be blank`;
    } else if(!isEmail(emailAdd)) {
        eme.textContent = `Invalid Email`;
    }
}

submitBtn.addEventListener('click',() => checkInputs());

function checkEmailInput() {
    const email = subEmail.value.trim();

    if(email === '') {
        see.textContent = `Email cannot be blank`;
    } else if (!isEmail(email)) {
        see.textContent = `Invalid Email`
    }
}

subBtn.addEventListener('click', () => checkEmailInput());