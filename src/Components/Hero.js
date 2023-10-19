import React from 'react';
import './hero.css';
import herophoto from '../assets/restauranfood.jpg';

const Hero = ()=> {
    return (
        <main className='hero-container'>
            <section className='main-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                <button id='button'>Reserve a table
                </button>
            </section>
            <section className='featured'>
                <img src={herophoto} alt='food on a platter' classname='herophoto'/>
            </section>
        </main>
    )
}

export default Hero;
