const menuButton = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
function showMobileMenu(){
    mobileMenu.style.transform = 'translateX(0)';
}

menuButton.addEventListener('click', showMobileMenu)