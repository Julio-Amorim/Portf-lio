const buttonMenu = document.querySelector('.buttonMenu');

const menuMobile = document.querySelector('.navBar-mobile');
let menuMobileIsVisible = false; // se false, o menu está fechado se true, o menu está aberto

let nomeElement = document.querySelector('.nomeTitulo');
let nome = "Julio Cesar";
let contadorDeLetrasN = 0;

buttonMenu.addEventListener('click', () => {
    menuMobileIsVisible ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    menuMobileIsVisible ? buttonMenu.children[0].setAttribute('src', '../img/three-dots.svg') : buttonMenu.children[0].setAttribute('src', '../img/x-square.svg')

    menuMobileIsVisible = !menuMobileIsVisible;
})

function animacaoNome(){
    if (contadorDeLetrasN < nome.length) {
        nomeElement.textContent += nome.charAt(contadorDeLetrasN);
        contadorDeLetrasN++;
        setTimeout(animacaoNome, 100);
    }
}

animacaoNome();
