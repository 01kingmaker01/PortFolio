const menubtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btnH');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.menu-item');
const main = document.querySelector('main');
var document = document;
let showMenu = false;

menubtn.addEventListener('click', toggltMenu);

function toggltMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');

    navItem.forEach((item) => {
      item.classList.add('open');
    });

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');

    navItem.forEach((item) => {
      item.classList.remove('open');
    });

    showMenu = false;
  }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $('.menu-nav');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//       $("p").addClass("test");
//     } else {
//       $("p").removeClass("test");
//     }
//   });
// });
