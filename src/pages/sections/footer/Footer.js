import React from 'react';
import littleLemonLogo from "../../../assets/Little Lemon logo.png";
import './footer.css';

const Footer = ()=> {
    return (
        <footer className='footer-container'>
            <img src={littleLemonLogo} alt = 'Little lemon logo' className='footer-logo'></img>
            <ul className= 'sitenav-list'>
                <li className = 'sitenav-title'>Site navigation</li>
                <li className = 'site-list1'><a href="#home">Home</a></li>
                <li className = 'site-item'><a href="#menu">Menu</a></li>
                <li className = 'site-item'><a href="#about">About</a></li>
                <li className = 'site-item'><a href="#reservations">Reservations</a></li>
                <li className = 'site-item'><a href="#login">Login</a></li>
                <li className = 'site-item'><a href="#orderOnline">Order Online</a></li>
            </ul>
            <ul className= 'contactus-list'>
                <li className = 'contact-title'>Contact Us</li>
                <li className = 'contact-item'><a href="#phone">Phone</a></li>
                <li className = 'contact-item'><a href="email">Email</a></li>
                <li className = 'contact-item'><a href="#address">Address</a></li>
            </ul>
            <ul className ='social-list'>
                <li className = 'social-title'>Social media</li>
                <li className = 'social-item'><a href="#facebook">Facebook</a></li>
                <li className = 'social-item'><a href="#instagram">Instagram</a></li>
                <li className = 'social-item'><a href="#twitter">Twitter</a></li>
            </ul>
            <p className='footer-copy'>&copy; 2023 Little Lemon. All rights Reserved.</p>
        </footer>
    );
};

export default Footer;
