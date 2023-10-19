import React from 'react';
import littleLemonLogo from "../assets/Little Lemon logo.png";
import './footer.css';

const Footer = ()=> {
    return (
        <footer className='footer-container'>
            <img src={littleLemonLogo} alt = 'Little lemon logo' className='logo'></img>
            <ul class= 'siteNav'> Site Navigation
                <li className = 'list1'><a href="#home">Home</a></li>
                <li className = 'list1'><a href="#menu">Menu</a></li>
                <li className = 'list1'><a href="#about">About</a></li>
                <li className = 'list1'><a href="#reservations">Reservations</a></li>
                <li className = 'list1'><a href="#login">Login</a></li>
                <li className = 'list1'><a href="#orderOnline">Order Online</a></li>
            </ul>
            <ul class= 'contactUs'>Contact Us
                <li className = 'list1'><a href="#phone">Phone</a></li>
                <li className = 'list1'><a href="email">Email</a></li>
                <li className = 'list1'><a href="#address">Address</a></li>
            </ul>
            <ul class ='socialMedia'>Social media
                <li className = 'list1'><a href="#facebook">Facebook</a></li>
                <li className = 'list1'><a href="#instagram">Instagram</a></li>
                <li className = 'list1'><a href="#twitter">Twitter</a></li>
            </ul>
            <p className='copy'>&copy; 2023 Little Lemon. All rights Reserved.</p>
        </footer>
    );
};

export default Footer;
