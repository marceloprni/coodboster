const btnDropdown = document.querySelector('[data-js="btn-dropdown"]');
const dropdown = document.querySelector('[data-js="dropdown"]');

function openDropdown(event){
  event.preventDefault();

  dropdown.classList.toggle('active');
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);


const header = document.querySelector('[data-js="header"]');
const btnMenu = document.querySelector('[data-js="btn-menu-mobile"]');
const iconMenuMobile = document.querySelector('[data-js="icon-menu-mobile"]');

function fixedMenu(){
  if(window.pageYOffset > 80){
    header.classList.add('fixed-menu');
    iconMenuMobile.src = './img/btn-mobile-color.svg';
  } else {
    header.classList.remove('fixed-menu');
    iconMenuMobile.src = './img/btn-mobile.svg';
  }
}

document.addEventListener('scroll', fixedMenu);


// const btnMenu = document.querySelector('[data-js="btn-menu-mobile"]');
const overlayMenu = document.querySelector('[data-js="overlay"]');

function openMenuMobile(){
  document.documentElement.classList.toggle('menu-opened');
}

btnMenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);