const burger = document.getElementById('burger');
const menu = document.getElementById('menu-ul');

burger.addEventListener('click', ()=> {
    menu.classList.toggle('menu-ul_visible');
    burger.classList.toggle('burger', 'burger_active');
    //burger.classList.remove('burger');
});