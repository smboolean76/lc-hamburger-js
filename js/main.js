"use strict";

const btnMenu = document.getElementById('toggle-menu');
// const btnMenu = document.querySelector('#toggle-menu');
const mainNav = document.querySelector('.main-nav');

btnMenu.addEventListener('click', function() {
    mainNav.classList.toggle('open-menu');
    btnMenu.classList.toggle('fa-bars');
    btnMenu.classList.toggle('fa-times');
});