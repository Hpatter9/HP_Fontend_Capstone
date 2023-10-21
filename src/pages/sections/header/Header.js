import React, { useState } from 'react';
import littleLemonLogo from '../../../assets/Little Lemon logo.png';
import menuicon from  '../../../assets/hamburger menu.svg';
import { useNavigate } from "react-router-dom";
import './header.css';

const Header = () => {

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickImage = () => {
    navigate ("/");
  };

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Menu", link: "/menu" },
    { id: 4, label: "Reservations", link: "/reservations" },
    { id: 5, label: "Order Online", link: "/orders" },
    { id: 6, label: "Login", link: "/login" }
  ];

  return (
    <header className='header-container'>
      <div className='header-logo'>
        <img src={littleLemonLogo} alt='Little Lemon Logo' height={50} onClick={onClickImage} />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map(item => (
            <li key={item.id}>
              <a href={item.link} className="link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='menu-toggle' onClick={toggleMenu}>
        <img src={menuicon} alt='menu-icon'/>
      </div>
    </header>
  );
};

export default Header;
