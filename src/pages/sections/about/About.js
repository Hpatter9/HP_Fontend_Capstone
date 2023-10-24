import React from 'react';
import './about.css';
import about1 from '../../../assets/restaurant.jpg';
import about2 from '../../../assets/Mario and Adrian b.jpg';

const About = ()=> {
    return (
        <div className ='about-container'>
            <div className ="about-text">
                <h3 className='about-title'>Little Lemon</h3>
                <h2 className='about-location'>Chicago</h2>
                <p className='about-description'>Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. Crafted by expert chefs with locally-sourced ingredients, our dishes not only delight the palate but nourish the soul. Whether you're seeking a romantic dinner, a family meal, or a relaxed atmosphere with friends, Little Lemon is your ideal culinary destination. Find us in the heart of Chicago for an unforgettable experience.</p>
            </div>
            <div className='about-images'>
                <img className='about-image-1' src={about1} alt='general restaurant pic' height={200} width={200}/>
                <img className='about-image-2' src={about2} alt='owners' height={200} width={200}  />
            </div>
       </div>
    )
}

export default About;