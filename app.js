var menu = document.querySelector('#mobile-menu');
var menuLinks = documents.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});