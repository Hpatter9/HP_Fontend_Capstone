import React from 'react';
import './hero.css';
import herophoto from '../../../assets/restauranfood.jpg';

const Hero = ()=> {
    return (
        <main className='hero-container'>
            <section className='main-content'>
                <h1 className='title'>Little Lemon</h1>
                <h2 className='location'>Chicago</h2>
                <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                <button id='button'>Reserve a table
                </button>
            </section>
            <section className='featured'>
                <img className ='hero-image' src={herophoto} alt='food on a platter' classname='herophoto'/>
            </section>
        </main>
    )
}

export default Hero;
