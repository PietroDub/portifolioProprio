// Transform the menu hamburguer into a X
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click',() => {
    togglemenu();
});
function togglemenu (){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}