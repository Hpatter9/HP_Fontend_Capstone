import React from 'react';
import Hero from '../sections/hero/Hero.js';
import Highlights from '../sections/highlights/Highlights.js';
import Card from '../sections/cards/Card.js';
import Testimonials from '../sections/testimonials/Testimonials.js';
import About from '../sections/about/About.js';

const Homepage = ()=> {
    return (
        <>
            <Hero />
            <Highlights />
            <Card />
            <Testimonials />
            <About />
        </>

    );
};

export default Homepage;