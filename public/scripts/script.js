// MENU BAR
const menu = document.querySelector('.menu-icon');

menu.addEventListener('click', main);

function main() {
    document.querySelector('body').classList.toggle('active');
}