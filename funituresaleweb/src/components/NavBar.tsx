import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faShoppingCart, faUser, faCouch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className='mainnn'>
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <FontAwesomeIcon icon={faCouch} size="2x" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="auth-links">
          <Link to="/signin"><FontAwesomeIcon icon={faUser} /> Sign in / Guest</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="icons">
          <button className="theme-toggle">
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
