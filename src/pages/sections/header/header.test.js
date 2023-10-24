import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.js';
import { BrowserRouter } from 'react-router-dom';

test('should render the header logo', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>);

  const logo = screen.getByAltText('Little Lemon Logo');
  expect(logo).toBeInTheDocument();
});

test('should render the header navigation menu', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const navigation = screen.getByText('Home');
  expect(navigation).toBeInTheDocument();
});


test('should close the header navigation menu when the menu toggle is clicked again', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const menuToggle = screen.getByAltText('menu-icon');
  menuToggle.click();
  menuToggle.click();

  const navigation = screen.getByText('Home');
  expect(navigation).not.toHaveClass('open');
});

test('should navigate to the home page when the logo is clicked', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const logo = screen.getByAltText('Little Lemon Logo');
  logo.click();

  const homePage = screen.getByText('Home');
  expect(homePage).toBeInTheDocument();
});

test('should navigate to the about page when the about menu item is clicked', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const aboutMenuItem = screen.getByText('About');
  aboutMenuItem.click();

  const aboutPage = screen.getByText('About');
  expect(aboutPage).toBeInTheDocument();
});

test('should navigate to the menu page when the menu menu item is clicked', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const menuMenuItem = screen.getByText('Menu');
  menuMenuItem.click();

  const menuPage = screen.getByText('Menu');
  expect(menuPage).toBeInTheDocument();
});

test('should navigate to the reservations page when the reservations menu item is clicked', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const reservationsMenuItem = screen.getByText('Reservations');
  reservationsMenuItem.click();

  const reservationsPage = screen.getByText('Reservations');
  expect(reservationsPage).toBeInTheDocument();
});

test('should navigate to the order online page when the order online menu item is clicked', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const orderOnlineMenuItem = screen.getByText('Order Online');
  orderOnlineMenuItem.click();

  const orderOnlinePage = screen.getByText('Order Online');
  expect(orderOnlinePage).toBeInTheDocument();
});

test('should navigate to the login page when the login menu item is clicked', () => {
  render(<BrowserRouter>
    <Header />
  </BrowserRouter>);

  const loginMenuItem = screen.getByText('Login');
  loginMenuItem.click();

  const loginPage = screen.getByText('Login');
  expect(loginPage).toBeInTheDocument();
});