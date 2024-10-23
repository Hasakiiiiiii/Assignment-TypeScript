"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetch product data from the API
const apiURL = "https://strapi-store-server.onrender.com/api/products";
// Function to fetch and display products
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(apiURL);
            const data = yield response.json();
            displayProducts(data.data);
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    });
}
// Function to display products on the page
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <div>
            <img src="${product.attributes.image}" alt="${product.attributes.title}">
            <h3>${product.attributes.title}</h3>
            <p>$${product.attributes.price}</p>
            </div>
        `;
        productList.appendChild(productCard);
    });
}
// Event listener to load products when button is clicked
// const viewProductsButton = document.getElementById('viewProducts');
// viewProductsButton.addEventListener('click', fetchProducts);
// Fetch products on page load (optional)
fetchProducts();
