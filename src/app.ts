// Fetch product data from the API
const apiURL = "https://strapi-store-server.onrender.com/api/products";

// Function to fetch and display products
async function fetchProducts() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        displayProducts(data.data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Function to display products on the page
function displayProducts(products: any[]) {
    const productList = document.getElementById('product-list') as HTMLElement;
    productList.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.attributes.image}" alt="${product.attributes.name}">
            <h3>${product.attributes.name}</h3>
            <p>$${product.attributes.price}</p>
        `;

        productList.appendChild(productCard);
    });
}

// Event listener to load products when button is clicked
const viewProductsButton = document.getElementById('viewProducts') as HTMLButtonElement;
viewProductsButton.addEventListener('click', fetchProducts);

// Fetch products on page load (optional)
fetchProducts();
