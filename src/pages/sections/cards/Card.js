import React from "react";
import './card.css';
import greeksalad from '../../../assets/greek salad.jpg';
import lemondessert from '../../../assets/lemon dessert.jpg';
import bruchetta from '../../../assets/bruchetta.svg';

const Card = () => {
  const cardData = [
    { id: 1, img:greeksalad, title: 'Greek Salad', price: '$12.24', description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
    { id: 2, img:bruchetta, title: "Bruchetta", price: '$6.22', description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
    { id: 3, img:lemondessert, title: "Lemon Dessert", price: '$5.23', description: "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables." },

  ];

  return (
    <div className='card-container'>
      {cardData.map((card) => (
        <div className='card' key={card.id}>
          <img className='cardimg' src={card.img} alt={card.title}/>
          <div className='cardbody'>
            <p className = 'cardtitle'>{card.title}</p>
            <p className='foodprice'>{card.price}</p>
            <h5 classNme='description'>{card.description}</h5>
            <h4 className='od'>Order Delivery</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
