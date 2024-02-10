import header from "./header.js";
import slider from "./slider.js";
import products from "./products.js";

/* add product to localStorage start */
(async () => {
  const photos = await fetch("js/data.json");
  const data = await photos.json();
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];

  products();
})();
/* add product to localStorage end */

/* add cartItems to localStorage */
const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
