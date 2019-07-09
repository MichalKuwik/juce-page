
//get dom el
const menuBurger = document.querySelector('.menu-hamburger');
const menuLines = document.querySelectorAll('.menu-hamburger div');
const menu = document.querySelector('.menu-mobile');
const menuItems = document.querySelectorAll('.menu-item');
let activeMenu = false;

const handleClickMenu = () => {
  if(!activeMenu){
    menuLines.forEach(item => item.classList.add('active'));
    menu.classList.add('show');
    menuItems.forEach(element => element.classList.add('showItem'));
    activeMenu = true;
    console.log('click');
  }else{
    menuLines.forEach(item => item.classList.remove('active'));
    menu.classList.remove('show');
    menuItems.forEach(element => element.classList.remove('showItem'));
    activeMenu = false;
  }
  
}

menuBurger.addEventListener('click',handleClickMenu);