const buttonMenu = document.querySelector('.buttonMenu');

const menuMobile = document.querySelector('.navBar-mobile');
let menuMobileIsVisible = false; // se false, o menu está fechado se true, o menu está aberto


buttonMenu.addEventListener('click', () => {
    menuMobileIsVisible ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    menuMobileIsVisible ? buttonMenu.children[0].setAttribute('src', '../img/three-dots.svg') : buttonMenu.children[0].setAttribute('src', '../img/x-square.svg')

    menuMobileIsVisible = !menuMobileIsVisible;
})