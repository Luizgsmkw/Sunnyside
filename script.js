const menuHamburguer = document.getElementById('menuHamburguer');

function tooggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

menuHamburguer.addEventListener('click', tooggleMenu)