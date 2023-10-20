import React from'react';
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about';
import Login from './pages/login/login';
import Menu from './pages/menu/menu';
import Order from './pages/order/order';
import Reservations from './pages/reservations/reservations';
import Layout from "./pages/sections/layout/layout";
import pages from "./pages/pages";
import './App.css'
import { Route, Routes } from "react-router-dom";

const App =()=> {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={pages.get("homepage").path} element={<Homepage />} />
          <Route path={pages.get("about").path} element= {<About />} />
          <Route path={pages.get("login").path} element= {<Login />} />
          <Route path={pages.get("menu").path} element= {<Menu />} />
          <Route path={pages.get('order').path} element= {<Order />} />
          <Route path={pages.get('reservations').path} element= {<Reservations />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;