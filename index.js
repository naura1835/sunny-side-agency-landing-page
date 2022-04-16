let menu = document.querySelector(".header__menu");
let mobileMenu = document.querySelector(".mobile-menu");

console.log(menu, mobileMenu);
menu.addEventListener("click", (e) => {
  //   e.preventDefault();
  mobileMenu.classList.toggle("is-active");
});
