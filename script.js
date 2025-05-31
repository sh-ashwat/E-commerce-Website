const list = document.querySelector(".nav-list"); 
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("fa-x");
  list.classList.toggle("nav-list-active");
});

//cart
const cartCount = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

let count = 0;

addToCartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
});