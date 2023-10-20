import React from 'react';
import littleLemonLogo from '../../../assets/Little Lemon logo.png';
import './header.css';

const Header = () => {
  return (
    <header className='header-container'>
      <logo className='logo'>
        <img src={littleLemonLogo} alt='Little Lemon Logo'/>
      </logo>
      <nav className='nav'>
        <ul>
          <li className='list-item1'><a href="#home">Home</a></li>
          <li className='list-item2'><a href="#about">About</a></li>
          <li className='list-item3'><a href="#menu">Menu</a></li>
          <li className='list-item4'><a href="#reservations">Reservations</a></li>
          <li className='list-item5'><a href="#orderOnline">Order Online</a></li>
          <li className='list-item6'><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;