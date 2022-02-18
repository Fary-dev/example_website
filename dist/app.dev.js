"use strict";

//   ---------------  Header ---------------------------
var hamburger = document.querySelector('#header .header .nav-bar .nav-list .hamburger');
var mobile_menu = document.querySelector('#header .header .nav-bar .nav-list ul');
var menu_item = document.querySelectorAll('#header .header .nav-bar .nav-list ul a');
var header = document.querySelector('#header .header.container');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll', function () {
  var scroll_position = window.scrollY;

  if (scroll_position > 100) {
    header.style.backgroundColor = "#000";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
menu_item.forEach(function (item) {
  item.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
}); //   ---------------  Fixed Button ---------------------------

var fixedButoon = document.getElementById("#fixButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    fixButton.style.display = "block";
  } else {
    fixButton.style.display = "none";
  }
}

;

function topFunction() {
  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

;