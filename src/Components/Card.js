import React from "react";
import './card.css';
import greeksalad from '../assets/greek salad.jpg';
import lemondessert from '../assets/lemon dessert.jpg';
import bruchetta from '../assets/bruchetta.svg';

const Card = () => {
  const cardData = [
    { id: 1, img:greeksalad, title: 'Greek Salad', description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
    { id: 2, img:lemondessert, title: "Lemon Dessert", description: "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables." },
    { id: 3, img:bruchetta, title: "bruchetta", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },

  ];

  return (
    <cards className='card-container'>
      {cardData.map((card) => (
        <div className='card' key={card.id}>
          <img className='cardimg' src={card.img} alt={card.title}/>
          <div className='cardbody'>
            <h4>{card.title}</h4>
            <h5>{card.description}</h5>
            <h4>Order Delivery</h4>
          </div>
        </div>
      ))}
    </cards>
  );
};

export default Card;
