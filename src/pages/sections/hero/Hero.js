import React from 'react';
import './hero.css';
import herophoto from '../../../assets/restauranfood.jpg';
import Button from '../../../Components/Button/button.js';
import { useNavigate } from "react-router-dom";
import pages from '../../pages.js';

const Hero = ()=> {
    const navigate = useNavigate();
    const onClickReserve = () => {
        navigate(pages.get('reservations').path);
    }
    return (
        <div className='hero-background'>
            <main className='hero-container'>
                <section className='hero-content'>
                    <h1 className='hero-title'>Little Lemon</h1>
                    <h2 className='hero-location'>Chicago</h2>
                    <p className='hero-description'>Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. </p>
                    <Button title={"Reserve a Table"} onClick={onClickReserve}/>
                </section>
                <section className='hero-featured'>
                    <img className ='hero-image' src={herophoto} alt='food on a platter' classname='herophoto'/>
                </section>
            </main>
        </div>
    )
}

export default Hero;
