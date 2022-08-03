const navbar = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu');
const menus = document.querySelectorAll('.menus');
const menuBars = document.querySelector('.menu-bars');
const submenus = document.querySelectorAll('.submenus');
const blur = document.querySelector('.overlay');

menuBars.addEventListener('click',openNav);
closeMenu.addEventListener('click',closeNav);

function openNav(){
    navbar.classList.add('active');
    blur.style.display = 'block';
}
function closeNav(){
    navbar.classList.remove('active');
    blur.style.display = 'none';
}
menus.forEach(i => i.addEventListener('click',() => {
    i.classList.toggle('active-submenu');
}))