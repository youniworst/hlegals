document.getElementById('hamburger').onclick = function () {
    document.getElementById('body').classList.add('mobile_nav_open');
}

document.getElementById('close').onclick = function () {
    document.getElementById('body').classList.remove('mobile_nav_open');
}