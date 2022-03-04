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


//   ---------------  Chat Bot ---------------------------

const chatIcon = document.querySelector('#hero .hero .chat-icon');
const chatBox = document.querySelector('#hero .hero .content');
const closeBtn = document.querySelector('#hero .hero .content .header-chat .close-btn');
const icon = document.querySelector('#hero .hero .chat-icon .fas');


// ------ Show content Chat Box ------

// chatIcon.addEventListener('click', () => {

//     chatBox.classList.toggle('active');
//     if (icon.style.color != "#fff")
//         icon.style.color = "#fff";
//     icon.style.color = "#302929";
// });
// closeBtn.addEventListener('click', () => {
//     chatBox.classList.toggle('active');
//     icon.style.color = "#fff";
// });

// ------ Show Chat icon after 10 seconde -------

// function showIcon() {
//     chatIcon.style.display = "flex";
// }

// function changeColorIcon() {
//     icon.style.color = "#302929";
// };
// setTimeout(() => {
//     showIcon();
// }, 10000);

// ------ Show Chat Box after 10.5 seconde -------

// function showChatBox() {
//     chatBox.classList.toggle('active');
// }

// setTimeout(() => {
//     showChatBox();
//     changeColorIcon();
// }, 10500);