export const fetchProducts = async (searchTerm: string) => {
    const url = searchTerm
        ? `https://strapi-store-server.onrender.com/api/products?search=${encodeURIComponent(searchTerm)}`
        : `https://strapi-store-server.onrender.com/api/products`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data || [];
}
