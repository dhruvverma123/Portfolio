let nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function (e) {
  nav.classList.add("navbar");
  setTimeout(() => {
    nav.classList.remove("navbar");
  }, 50);
});

let btn = document.querySelector(".scrollStyle");

btn.addEventListener("click", function (e) {
  window.scrollBy({
    top: window.innerHeight,
    behaviour: "smooth",
  });
});

let scrollUp = document.querySelector(".upperScrollStyle");
let section1 = document.querySelector(".navResponsive");
let lastScroll = 0;

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;
  if (currentScroll < lastScroll) {
    scrollUp.classList.add("scrollUpper");
  } else {
    scrollUp.classList.remove("scrollUpper");
  }

  lastScroll = currentScroll;
});

let effect = document.querySelectorAll(".onHoverEffect");

for (let i = 0; i < effect.length; i++) {
  effect[i].addEventListener("mouseenter", function () {
    effect[i].classList.add("hoverEffect");
    setTimeout(() => {
      effect[i].classList.remove("hoverEffect");
    }, 100);
  });
}

let ham = document.querySelector(".hamBar");
let navStyleForshow640px = document.querySelector(".navStyleForshow640px");
let cross = document.querySelector(".cross");

ham.addEventListener("click", function () {
  navStyleForshow640px.classList.add("nav-open");
  ham.style.display = "none";
  cross.style.display = "flex";
});

cross.addEventListener("click", function () {
  navStyleForshow640px.classList.remove("nav-open");
  ham.style.display = "flex";
  cross.style.display = "none";
});
