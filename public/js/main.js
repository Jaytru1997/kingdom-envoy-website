"use strict";

const initSideBar = () => {
  var elems = document.querySelector(".sidenav");
  var options = {
    edge: "right",
  };
  var instance = M.Sidenav.init(elems, options);
};

const initCarousel = () => {
  var elems = document.querySelectorAll('.carousel');
  var options = {
    fullWidth: true,
    indicators: true,
  };
  var instances = M.Carousel.init(elems, options);
}

const initFab = () => {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var options = {
    directon: 'top',
    hoverEnabled: true,
  };
  var instances = M.FloatingActionButton.init(elems, options);
};

const cycleFns = (fns) => {
  fns.forEach(fn => {
    document.addEventListener("DOMContentLoaded", fn);
  });
}

const fns = [initSideBar, initCarousel, initFab];

cycleFns(fns);

// document.addEventListener('DOMContentLoaded', initCarousel);
// document.addEventListener('DOMContentLoaded', initFab);

const sidenav = document.querySelector(".sidenav");

// sidenav.addEventListener('click', openNav(initSideBar));

// function cols(n) {
//   return `col-xxl-${n} col-xl-${n} col-lg-${n} col-md-${n} col-sm-${n} col-xs-${n}`;
// }
// const hamburger = document.querySelector("#hamburger");
// const navLinks = document.querySelector("#nav-links");
// hamburger.addEventListener(
//   "mouseenter",
//   (e) => (navLinks.classList = `nav-links show ${cols(12)}`)
// );
// hamburger.addEventListener(
//   "click",
//   (e) => (navLinks.classList = `nav-links hidden ${cols(12)}`)
// );
