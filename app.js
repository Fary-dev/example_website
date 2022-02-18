//   ---------------  Header ---------------------------

const hamburger = document.querySelector('#header .header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('#header .header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('#header .header .nav-bar .nav-list ul a');
const header = document.querySelector('#header .header.container');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = "#000";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


//   ---------------  Fixed Button ---------------------------

const fixedButoon = document.getElementById("#fixButton");

window.onscroll = () => { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        fixButton.style.display = "block";
    } else {
        fixButton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};