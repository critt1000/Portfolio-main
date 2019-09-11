//Code to add .sticky to navbar after scroll
//Source: https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.onscroll = function() {
  stickyNav();
};

const navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

let stickyNav = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// Code to animate class="hidden" elements
// Source: https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js
var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "hidden",
          "fade-in-element"
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

const mobileNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `nav-links-fade 0.5s ease-in forwards ${index /
          7 +
          0.4}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

mobileNav();
