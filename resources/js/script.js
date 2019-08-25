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
