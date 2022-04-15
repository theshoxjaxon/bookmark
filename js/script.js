let elHamburger = document.querySelector(".hamburger-menyu-btn");
let elHeader = document.querySelector(".header");
elHamburger.addEventListener("click", (evt) => {
  evt.preventDefault();
  elHeader.classList.toggle("header--open");
});
