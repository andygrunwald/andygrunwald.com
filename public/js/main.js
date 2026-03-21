document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelectorAll('.navbar-menu');

    function toggleMenu() {
        menu.forEach(function(el) { el.classList.toggle('hidden'); });
    }

    document.querySelectorAll('.navbar-burger').forEach(function(el) {
        el.addEventListener('click', toggleMenu);
    });
    document.querySelectorAll('.navbar-close').forEach(function(el) {
        el.addEventListener('click', toggleMenu);
    });
    document.querySelectorAll('.navbar-backdrop').forEach(function(el) {
        el.addEventListener('click', toggleMenu);
    });
});
