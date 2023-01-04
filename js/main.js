const menuBtn = document.querySelector('.burger');
const menuList = document.querySelector('.menu-list');
menuBtn.addEventListener('click', () =>{
    menuList.classList.toggle('active')
    menuBtn.classList.toggle('burger-active')
})
const now = new Date();

const data = document.getElementById('date')
data.innerText = now.getFullYear();