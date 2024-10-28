import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { fetchProducts } from '../services/productService';
import './Productpage.css'

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [input, setInput] = useState('');

    const handleSearch = () => {
        setSearchTerm(input) // Cập nhật từ khóa tìm kiếm khi người dùng nhấn nút
        setInput('');
    };

    useEffect(() => {
        fetchProducts(searchTerm).then(data => {
            const formattedProducts = data.map((item: any) => ({
                image: item.attributes.image,
                id: item.id,
                name: item.attributes.title,
                price: item.attributes.price

            }));
            setProducts(formattedProducts);
        });
    }, [searchTerm]); // Gọi lại API khi searchTerm thay đổi

    return (
        <div className="product-page">
          <h1 style={{fontFamily: 'sans-serif', marginTop: '20px'}} className="product-title">Products</h1>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search products..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
          <ul className="product-list">
            {products.map((product: any) => (
              <li key={product.id} className="product-item">
                <div className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price ? `$${product.price}` : '$0.00'}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default ProductsPage;
