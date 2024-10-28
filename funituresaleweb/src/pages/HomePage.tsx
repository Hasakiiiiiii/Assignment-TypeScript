import React from 'react';
import './Hompage.css'; // Thêm file CSS riêng cho Header
import sofaWeb from '../components/hero1.webp'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='mainnn1'>
        <header className="header">
      <div className="header-content">
        <h1 className="header-title">We are changing the way people shop</h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et voluptas saepe in quae voluptate, 
          laborum maiores possimus illum reprehenderit aut delectus veniam cum perferendis unde sint doloremque non nam.
        </p>
       <Link to='/products'><button className="header-button">Our Products</button></Link>
      </div>
      <div className="header-image">
        <img src={sofaWeb} alt="Sofa" />
      </div>
    </header>
    </div>
  );
};

export default Header;
