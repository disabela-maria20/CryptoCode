var Menu = function () {
    var menu_mobile = document.querySelector('.menu_burguer');
    var nav_menu = document.querySelectorAll('.menu');
    menu_mobile.addEventListener('click', function () {
        menu_mobile.classList.toggle('active');
        nav_menu.forEach(function (item) {
            item.classList.toggle('active');
        });
    });
};
Menu();
