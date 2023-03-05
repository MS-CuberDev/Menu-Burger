const menuBurger = document.querySelector('.menu__burger');
const menuBar = document.querySelector('.menu__bar');

menuBurger.addEventListener('click', () => {
    menuBar.classList.toggle('open');
    menuBurger.classList.toggle('active');
})