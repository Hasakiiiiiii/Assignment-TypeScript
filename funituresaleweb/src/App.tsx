import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <div style={{backgroundColor: '#1E293B', width: '100%', height: '50px'}}></div>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
    </div>
  );
}

export default App;
