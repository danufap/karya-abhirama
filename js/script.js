// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// Menu di klik
document.querySelector('#menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// sidebar
const menu = document.querySelector
('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    
});
