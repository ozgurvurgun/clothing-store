import { product1 } from "./glide.js";
const productsData = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartItems = document.querySelector(".header-cart-count");

function addToCart() {
  const buttons = [...document.getElementsByClassName("add-to-cart")];
  buttons.forEach((button) => {
    const inCart = cart.find((item) => item.id === Number(button.dataset.id));
    if (inCart) {
      button.setAttribute("disabled", "disabled");
    }
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const findProduct = productsData.find(
        (product) => product.id === Number(id)
      );
      cart.push({ ...findProduct, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      button.setAttribute("disabled", "disabled");
      cartItems.innerHTML = cart.length;
    });
  });
}

function products() {
  const productsData = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const productContainer = document.getElementById("product-list");
  let result = "";
  productsData.forEach((item) => {
    result += `
    <li class="product-item glide__slide">
        <div class="product-image">
        <a href="#">
            <img src="${item.img.singleImage}" alt="" class="img1" />
            <img src="${item.img.thumbs[1]}" alt="" class="img2" />
        </a>
        </div>
        <div class="product-info">
        <a href="$" class="product-title">${item.name}</a>
        <ul class="product-star">
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-half"></i>
            </li>
        </ul>
        <div class="product-prices">
            <strong class="new-price">$${item.price.newPrice.toFixed(
              2
            )}</strong>
            <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
        </div>
        <span class="product-discount">-${item.discount}%</span>
        <div class="product-links">
            <button class="add-to-cart" data-id=${item.id}>
            <i class="bi bi-basket-fill"></i>
            </button>
            <button>
            <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#">
            <i class="bi bi-eye-fill"></i>
            </a>
            <a href="#">
            <i class="bi bi-share-fill"></i>
            </a>
        </div>
        </div>
    </li>  
   `;
  });
  productContainer.innerHTML = result;
  addToCart();
  product1();
}

export default products;
