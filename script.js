const list = document.querySelector(".nav-list"); 
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("fa-x");
  list.classList.toggle("nav-list-active");
});
