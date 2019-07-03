
//get dom el
const menuBurger = document.querySelector('.menu-hamburger');
const menuLines = document.querySelectorAll('.menu-hamburger div');
let activeMenu = false;

const handleClickMenu = () => {
  if(!activeMenu){
    menuLines.forEach(item => item.classList.add('active'));
    activeMenu = true;
    console.log('click');
  }else{
    menuLines.forEach(item => item.classList.remove('active'));
    activeMenu = false;
  }
  
}

menuBurger.addEventListener('click',handleClickMenu);