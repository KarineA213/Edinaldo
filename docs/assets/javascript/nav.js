const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
});


const dropdowns = document.querySelectorAll(".dropdown__item");

dropdowns.forEach(item => {
  const btn = item.querySelector(".dropdown__button");

  btn.addEventListener("click", () => {
    item.classList.toggle("dropdown-open");
  });
});