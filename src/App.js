import React from'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import './Components/header.css'; // Import the CSS file for the Header component
import './Components/footer.css';
import './Components/hero.css';
import './Components/highlights.css'
import './App.css'

const App = ()=> {
  return (
    <body classname = 'app-body'>
      <Header className='header' />
      <Hero className='hero'/>
      <Highlights className='highlights' />
      <Footer className='footer'/>
    </body>
  );
}

export default App;